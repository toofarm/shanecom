---
tags:
  - node.js
  - next.js
  - strapi
title: Saving uploaded images using Strapi and Next.js
sub_head: A challenging proposition to say the least
featured_image: /uploads/2022_03_17_file_cabinet.jpeg
caption: Wikimedia Commons / rrafson
additional_images: ''
date_created: '2022-03-21 2:00 PM'
date_updated: null
highlighted: false
_template: post
---

I recently had to implement a feature in a web app that allowed users to upload images.  

The frontend of this app was built in [Next.js](https://nextjs.org/) and connections to our database were handled via a [Strapi](https://strapi.io/) API.

Since I found this feature difficult to implement, and documentation on the subject lacking, I figured I'd outline my solution for anyone facing a similar task.

## App structure

The app we were building called for a "contact us" feature, which would allow users to upload images via a form. We would then store these images and send them out to site administrators as email attachments.

Though simple in theory, doing this within the context of our app proved to be a significant challenge.

For anyone unfamiliar with the framework, Next.js is a superset of React which offers as its big selling point the ability to pre-render pages server-side, then dispatch them to the browser as raw HTML. One of the major differences between Next and React is that parts of a Next app will execute on the server, a feature we used to build authentication into our application.

In order to authenticate users, we passed all API calls through a proxy, which would check for a valid user token before dispatching a call for the appropriate resource. Since the proxy and the calls to external resources lived on the server (per [Next.js's recommended design patterns](https://nextjs.org/docs/api-routes/introduction)), we weren't calling remote APIs directly from the browser; rather, we'd call the Next.js API route housed on the server, which would then authenticate the call and route it to its final destination.

![](/uploads/2022_03_18_application-structure.png)

This meant that when uploading our photos, we had to make two API calls:

1. _Call the Next.js proxy from the browser_
2. _Once we've authenticated, make a call server-side from Next.js to Strapi, passing the uploaded image as a payload_

Within Next.js, our app structure looked like this:

    ...
    --/components
    --/pages
    ----/api
    ------/proxy
    ------upload.ts
    ----contactUs.tsx

Everything within the /api directory executes on the server, including the call to Strapi, which lives in upload.ts.

## Strapi's recommendations

Strapi [provides a plugin](https://docs.strapi.io/developer-docs/latest/plugins/upload.html#configuration) for handling file uploads and offers decent documentation on the same.

However, Strapi's docs assume that you'll be uploading files directly to Strapi from the browser. Thus, Strapi's upload plugin will only accept FormData in its payload.

Our app broke this pattern, since we had to pass our images to the server on which Next.js executed its server-side code, then pass those same images along to Strapi after authenticating. As it turned out, reconstituting our [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) server-side within Next.js proved extremely frustrating.

I won't go through all the approaches we tried to fix this issue, but suffice to say that we burned a host of productive hours with little to show for the effort to but a wide array of error messages. Despite our efforts, the best we could come up with was a useless blob of file binaries sitting on our Next.js server.

The solution required a hacky workaround that made use of the Next.js server's file structure.

## A functional workaround

Our solutions kept failing because we would receive the uploaded images as binaries on the Next.js server. However, Strapi wouldn't accept binaries as a payload.

We eventually concluded that in order to reconstitute the images as FormData, we would have to store them within the Next.js server's file structure, then "upload" them into a new FormData object, which we could then pass along to Strapi.

This meant our file upload workflow actually had four stages:

1. _User attaches file, sends to Next.js API route_
2. _Next.js stores image in server-side file system_ 
3. _Next.js passes stored image to Strapi as FormData_ 
4. _Next.js deletes image from server-side file system_

In order to implement this solution, we used [Multer](https://www.npmjs.com/package/multer) and [fs](https://nodejs.org/api/fs.html) in our Next.js API endpoint. Multer helped us parse the incoming form data, then we used fs to write our form data to the local file system.

Once we had the files saved, we could create a new FormData object, reference our temporary saved files, and upload them to the database in a form Strapi would accept.

After confirming that Strapi had saved the images successfully in our database, we then deleted the images from our Next.js server.

## News you can use

Your own implementation of this workaround will likely vary based on which stack you're using, but the workflow should remain roughly the same:

1. _Upload file to SSR (Server-Side Rendering) server_
2. _Save file in SSR server-side file system_
3. _Upload as FormData from SSR file system to backend API_

I hope this saves someone a headache!

---
tags:
- node.js
- next.js
- strapi
title: Saving uploaded images using Strapi
sub_head: A challenging proposition to say the least
featured_image: "/uploads/2022_03_17_file_cabinet.jpeg"
caption: Wikimedia Commons / rrafson
additional_images: ''
date_created: 2022-03-21 2:00 PM
date_updated: 
highlighted: false

---
I recently had to implement a feature in a web app that allowed users to upload images through a user interface built in [Next.js](https://nextjs.org/), and then store those images in a PostGRES database via a [Strapi](https://strapi.io/) API. 

Since I found this difficult to implement, and documentation on the subject lacking, I figured I'd outline my solution for anyone facing a similar issue.

## App structure

The app we were building called for a "contact us" feature, which would allow users to upload images via a form. We would then store these images and send them out to site administrators as email attachments.

Though simple in theory, doing this within the context of our app proved to be a significant challenge.

For anyone unfamiliar with the framework, Next.js is a superset of React whose big selling point is the ability to render pages server-side, then dispatch those to the browser as raw HTML. One of the major differences between Next and React is that parts of a Next app will execute on the server, a feature we used to build authentication into our application.

In order to authenticate users, we passed all API calls through a proxy, which would check for a valid user token before dispatching a call for the appropriate resource. This meant that when uploading our photos, we had to make two API calls:

1. Call the Next.js proxy, which lives on the server
2. Once we've authenticated, make a call server-side from Next.js to Strapi, passing the uploaded image as a payload

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

However, Strapi's docs assume that you'll be uploading files directly to Strapi from the frontend. As such, Strapi's upload plugin will only accept FormData in its payload.
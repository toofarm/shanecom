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
I recently had to implement a feature in a web app that allowed users to upload images through a user interface built in [Next.js](https://nextjs.org/), and then store those images in a PostGRES database on top of which sat a [Strapi](https://strapi.io/) API. 

Since I found this difficult to implement and documentation on the subject lacking, I figured I'd outline my solution for anyone facing a similar issue.

## App structure

The app we were building called for a "contact us" feature, which would allow users to upload images via a form. We would then store these images server-side and send them out to site administrators as email attachments.

Though simple in theory, doing this within the context of our app proved to be a significant challenge.
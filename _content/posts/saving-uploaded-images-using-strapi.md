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

## Structural issues

A while back, I built a large application that used Next.js for its frontend and Strapi for its backend.

Though I don't have much negative to say about either of these frameworks, one aspect of the app proved incredibly frustrating to implement using this stack.

As part of a "contact us" feature, users had to have the ability to upload images from their computer to our system. We would then send these images out to site administrators as email attachments.

Though simple 
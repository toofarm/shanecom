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
A while back, I worked on a large project that required building a fullstack application with Next.js for its frontend and [Strapi](https://strapi.io/) for its backend.

Though I don't have much negative to say about either of these tools, one aspect of the app I was working on proved incredibly frustrating to implement using this stack.

As part of a "contact us" feature, users had to have the ability to upload images from their computer to our system. We would then send these images out to site administrators as email attachments.

Simple, right?

## Problems abound
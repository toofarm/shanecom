# 🌐 Shanecom

A personal CMS

Presentation layer in Next.js, content managed via [TinaCMS](https://www.npmjs.com/package/tinacms) (formerly Forestry.io)

## 📁 Project structure

All site content types lives in `_content`. This directory contains markdown files, which adhere to a data taxonomy laid out in TinaCMS.

At build time, Next.js converts the markdown files to HTML and uses SSG to generate application routes.

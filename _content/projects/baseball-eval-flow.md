---
tags:
  - tag: _content/tags/wordpress.md
  - tag: _content/tags/react.md
  - tag: _content/tags/javascript.md
title: E.P. Carrillo Product Pages
sub_head: A product page face-lift for a storied  cigar maker
featured_image: /uploads/2022_03_06_inch-maduro-box-open_1200.png
caption: E.P. Carrillo
project_web_link: "https://www.carrillocigars.com/product/inch-maduro-2/"
project_repo_link: ""
additional_images: []
highlighted: false
date_created: 2021-11-15T08:00:00.000Z
date_updated: 1970-01-01T00:00:00.000Z
---

I completed this job while working for [Theo Agency](https://theo.agency/). E.P. Carrillo was a client of the firm's and they wanted to update the look of their product pages, which lived within their WordPress website.

Working off of mocks created by the firm's design team, I built out custom templates to update the product pages' visual design. Achieving the prescribed designs meant adding a variety of custom content fields to the product pages' taxonomy, then updating the product page templates to consume these values and display them to the end user.

![](/uploads/2022_03_06_screen-shot-2022-03-06-at-2-46-12-pm.png)

## 'Find a Retailer Near You'

The designs called for a  widget that would allow the user to enter his or her zip code and find nearby cigar retailers that carry E.P. Carrillo products. I researched WordPress plugins that might provide this functionality, but none allowed for us to achieve the visual feel called for in the design mocks. Thus, I decided to code my own plugin.

Using React.js, Typescript and the Google Maps API, I wrote a custom WordPress plugin that could be inserted into the product pages, providing the required functionality with a unique visual flair.

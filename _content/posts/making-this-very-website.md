---
tags:
- wordpress
- javascript
- nextjs
title: Making this very website
sub_head: My journey from a pretty bad website, to a pretty good one
featured_image: "/uploads/2022_03_01_sunrise.jpeg"
additional_images: ''
date_created: 2022-03-01 4:00 PM
date_updated: 
highlighted: false

---
The website you're viewing represents a long-overdue refactor of my original portfolio site, which I'd held together with duct tape and baling wire for an embarrassing number of years.

## The original site

I built my [original portfolio site](https://github.com/toofarm/Portfolio-site) shortly after completing a coding bootcamp at City University of New York (highly recommend, btw).

In my eagerness to create presentable work, I neglected many development fundamentals, rendering a completed project that served its purpose, but barely.

Problems with my original site included:

* **Lots of JQuery** - I composed all UI interactions with JQuery, which made for a bloated, poorly-optimized codebase 
* **Hard-coded content** - It's difficult in retrospect to believe that I did this, but all the content in my previous site was hard-coded into the app
* **Excessive focus on design, not enough focus on function** - As a developer, I think the first question should be "how does it work?", rather than "how does it look?"

Given how little I knew at the time, I'm not mad about how the original version of my portfolio turned out. However, my ability as a developer has increased significantly since then, and return voyages to my portfolio's codebase sparked professional annoyance at having to work with something that was just so _bad_. The time had arrived to do something different.

## Plan of attack

Going into the project, I had a couple requirements:

* I wanted to compose the user interface using a modern Javascript framework
* I wanted to manage content through an actual CMS
* I wanted to use a minimalist approach to the website's visual design

The last point represented a large departure. I'd spent most of my effort the first time around creating animations, color schemes, and icons, believing that a strong visual style would work in my favor.

I wasn't exactly incorrect in this assumption, but, as subsequent events have proven, I'm a developer, not a designer. For me to spend inordinate amounts of time massaging a website's visual design proved to be a poor use of time for, sadly to say, no matter how much effort I put into visual design, I'll be forever limited by my sophomoric design sense.

With these requirements in mind, I went in search of technology stack with which to approach the project.

## First attempt

For the frontend of my project, I elected to go with [Next.js](https://nextjs.org/) — a superset of React.js whose major selling point is the ability to pre-render pages server-side and serve them to the browser as raw HTML. 

I'd used Next.js for a couple prior projects and found that I enjoyed its API. The library also suits content-heavy sites by pre-rendering pages at build-time, which makes for lightening-fast page loads.

I've worked with WordPress many times in the past, and for that reason I originally chose WordPress as my project's CMS. Despite pitching several clients on the idea, I had never gotten the chance to build an entirely headless WordPress site, and I decided my portfolio would be a perfect opportunity to try this technique.
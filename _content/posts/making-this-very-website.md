---
tags:
  - next.js
  - wordpress
  - javascript
title: Making this very website
sub_head: 'My journey from a pretty bad website, to a pretty good one'
featured_image: /uploads/compressed/2022_03_01_sunrise.jpeg
additional_images: ''
date_created: '2022-03-01 4:00 PM'
date_updated: null
highlighted: false
caption: ''
_template: post
---

The website you're viewing represents a long-overdue refactor of my [original portfolio site](http://oldsite.shanemadethat.com/), which I'd held together with duct tape and baling wire for far too many years.

![](/uploads/2022_03_06_screen-shot-2022-03-06-at-12-59-21-pm.png)

## The original site

I built my original portfolio site shortly after completing a coding bootcamp.

Still new to development, I missed a huge amount of common-sense improvements that would have made my experience easier. 

These problems included:

* **Lots of JQuery** - I composed all UI interactions with JQuery, which made for a bloated, poorly-optimized codebase
* **Hard-coded content** - It's difficult in retrospect to believe that I did this, but all the content in my previous site was hard-coded into the app
* **Excessive focus on design, not enough focus on function** - As a developer, I think the first question should be "how does it work?", rather than "how does it look?"

Given how little I knew at the time, I'm not mad about how my original portfolio turned out. However, my ability as a developer has increased significantly since then, and return voyages to my portfolio's codebase sparked professional annoyance at having to work with something that was just so _bad_. The time had arrived to do something different.

## Plan of attack

Going into the project, I had a couple requirements:

* I wanted to compose the user interface using a modern Javascript framework
* I wanted to manage content through an actual CMS
* I wanted to use a minimalist approach to the website's visual design

The last point represented a departure. I'd spent most of my effort the first time around creating animations, color schemes, and icons, believing that a strong visual style would work in my favor.

I wasn't exactly incorrect in this assumption, but, as subsequent projects have proven, I'm a developer, not a designer. For me to spend the majority of my development efforts massaging a website's visual design proved to be a poor use of time.

With these requirements in mind, I went in search of technology stack with which to approach the project.

![](/uploads/2022_03_06_nextjs_logo.png)

## Trying it with WordPress

For the frontend of my project, I elected to go with [Next.js](https://nextjs.org/) — a superset of React.js whose major selling point is the ability to pre-render pages server-side and serve them to the browser as raw HTML.

I'd used Next.js for a couple prior projects and found that I enjoyed its API. The library also suits content-heavy sites by pre-rendering pages at build-time, which makes for lightening-fast page loads.

I've worked with WordPress many times , and for that reason I originally chose WordPress as my project's CMS. Despite pitching several clients on the idea, I had never gotten the chance to build an entirely headless WordPress site, and I decided my portfolio would be a perfect opportunity to try this technique.

### Good and bad times with the WordPress API

Since the advent of [WordPress's REST API](https://developer.wordpress.org/rest-api/), it's been possible to use WordPress as a headless CMS. Though I appreciate WordPress's efforts to make their platform work within the contemporary web ecosystem, I nonetheless found WordPress a difficult choice for a headless project.

WordPress certainly has a REST API, but that API doesn't come completely built out, and instead relies on the end user to build custom endpoints and functionality for many common use cases. 

For instance, retrieving the 'Front page' of your WordPress site from the REST API requires hand-coding a custom endpoint. Same goes for custom post types and content fields; if you plan on extending WordPress at all in the course of development, you're essentially signing yourself up to hand-code your own API.

It also became clear while working through my WordPress build that the platform simply wasn't set up to cater to my needs. My project required a small number of custom content types, and a simplified API that would allow me to retrieve them on the frontend. WordPress was both underdeveloped, in that its REST API required extensive customization in order to meet my needs, and overdeveloped, in that it came packaged with a content taxonomy and database structure much more robust than my project called for.

After a week's worth of development work on the WordPress version of my website, I decided to opt for a CMS that was designed for use in a headless environment.

## Forestry

I've built projects using [Strapi](https://strapi.io/) as a headless CMS, and though I found that process easy enough, for my portfolio site refactor, I went with a platform that has an even lower development overhead — [Forestry.io](https://forestry.io/).

Forestry's big selling point is that it allows you to use a Git repository as the database layer of your CMS. After creating content in the Forestry admin panel, Forestry will push that content up to a GitHub repo, where you can easily employ a frontend framework to integrate that content with the presentation layer of your application.

I elected to store my site content in markdown, through Forestry also allows you export it in a couple other formats, including JSON.

Unlike WordPress, where creating custom content types and properties demands extra dev work, Forestry assumes that the user will specify their content types and properties from scratch. This was perfect for my project, which demanded a small, custom content taxonomy, over whose properties I had absolute control.

I'd be hesitant to use Forestry for a larger project with multiple users (though that hasn't stopped some [rather large companies](https://forestry.io/showcase/)) because of hesitations about its feature set and deployment pipeline. However, for my small, personal project, I found it ideal.

## A new dawn

Discounting the week of fruitless work on the WordPress version of my updated portfolio, it took only a week to put this website together. I wound up using a Forestry-GitHub-Next.js (FoGiNx?) stack, which remains lightweight and allows for rapid deployments.

In addition to serving as an online hub for my work, this website has the added benefit of being fun to develop. I couldn't be happier with the results and I hope you have a good time taking a look around.

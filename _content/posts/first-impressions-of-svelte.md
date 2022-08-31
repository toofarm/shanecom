---
tags:
- react.js
- svelte
- javascript
title: First impressions of Svelte
sub_head: Is it better than React? In a word, yes
featured_image: "/uploads/2022_08_29_svelte_logo-svg.png"
caption: ''
additional_images: ''
date_created: 2022-09-02 2:00 PM
date_updated: 
highlighted: false

---
I've spent a year or so noting the frequency with which [Svelte](https://svelte.dev/) keeps showing up in debates as to which frontend framework is "the best".

Already curious about the framework, I decided to give Svelte a try after reading [an article](https://javascript.plainenglish.io/javascript-frameworks-and-core-web-vitals-b5581f1c8962) comparing the [Core Web Vitals](https://support.google.com/webmasters/answer/9205520?hl=en) performance of common frontend frameworks. In this article, the author revealed that, according to Google's data on the subject, Svelte was wiping the floor with both React.js and Angular across all CWVs. SvelteKit, Svelte's server-side rendering library, performed even better.

My curiosity piqued, I decided to try using Svelte on a modest "Hello World" app, and see how it compared to React.js and VueJS - my two favorite presentation-layer frameworks to date.

**TL;DR** Though it's not without downsides, Svelte has a great many advantages over both React.js and VueJS. I hope Svelte becomes more common as a go-to web development framework.

## The Good

Before going into the positives, I should note that this article comprises my rough first impressions. A thorough technical investigation into any of these frameworks falls outside this article's scope, though perhaps I'll go into that in a later post.

### Speed

Unlike React and Vue, Svelte does away entirely with the virtual DOM, instead relying on a compiler to transform your .svelte components into highly optimized Javascript. As a result, Svelte ships a minuscule payload to the browser, resulting in blinding-fast page performance.
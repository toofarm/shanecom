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

Before going into the positives, I should note that this article comprises my rough first impressions. A thorough technical investigation into any of these frameworks falls outside this article's scope, though perhaps I'll get to that in a later post.

### Speed

Unlike React and Vue, Svelte does not use a virtual DOM, instead relying on a compiler to transform .svelte components into highly optimized Javascript. As a result, Svelte apps ship a minuscule payload to the browser, resulting in remarkably fast on-page performance.

Svelte's compiler is its banner feature. Framework founder [Rich Harris](https://github.com/Rich-Harris) has maintained that the virtual DOM bloats conventional SPA payloads unnecessarily, whereas Svelte outpaces these competitors by shipping only vanilla Javascript.

The app I developed while playing around with Svelte was too small to validate this theory meaningfully, but it at least allowed me to see that Svelte ships a miniscule bundle to the browser (in my case TK kb), which helps dramatically with load times.

### Syntax

Svelte has what is (to my mind) an advantage over React in that it bundles component markup, logic, and styling into single files. VueJS employs this technique as well, and I've always found it much more convenient than trying to parse these elements into separate files - as is suggested but not demanded by React.

Svelte also allows developers to employ TypeScript and SCSS within these single-file components, though this feature (as we'll see) is touch-and-go at present.

### State management

In reading about Svelte I've been surprised at relatively uncommon mention of the library's state management solutions. 

Svelte allows developers to send data through their applications using prop drilling, just like VueJS and React. However, unlike the aforementioned, Svelte comes with flux-like capability baked in!

[Stores](https://svelte.dev/tutorial/writable-stores), as they're known in Svelte parlance, allow developers to distribute data throughout their apps, much in the same way libraries such as Redux and Vuex provide similar capabilities to React and Vue applications.

In Svelte, however, Stores come bundled with the library and require no third-party package. They are also, in my opinion, far easier to write and maintain than Redux or Vuex stores. The latter libraries present a significant hurdle for newcomes to the React and VueJS ecosystems, and obviating that difficulty at the start scores a significant point in Svelte's favor.

## The Bad (or at least the frustrating)
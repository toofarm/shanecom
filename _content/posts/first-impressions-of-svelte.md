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

My curiosity piqued, I decided to try using Svelte on a [modest "Hello World" app](https://github.com/toofarm/InflationCalculator), and see how it compared to React.js and VueJS - my two favorite presentation-layer frameworks to date.

**TL;DR** _Though it's not without downsides, Svelte has a great many advantages over both React.js and VueJS. I hope Svelte becomes more common as a go-to web development framework._

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

### Limited community

Svelte does not have a community the size of React or Vue's, which creates several difficulties.

For one, Svelte developers are much more difficult to come by than developers for better-known frameworks. I think one of Svelte's advantages is how easy it is learn, but still, you'll have trouble finding someone with the framework on their resume.

This means as well that problems you run into in your development process will be much harder to resolve. On StackOverflow, as of this writing, there are 411,344 posts about ReactJS and 7,839 about Svelte. Yikes.

### Tooling

For my sample project, I elected to use TypeScript for application logic and SCSS for styling. Thought Svelte supports both libraries, I found it very difficult to get them both to work.

I  had bootstrapped my project with SvelteKit and Vite, [per Svelte's recommendation](https://kit.svelte.dev/docs/introduction#introduction-before-we-begin), but even within Svelte's recommended dev environment, getting to the "Hello World" phase was a challenge. Only after writing three separate config files, downloading a half-dozen helper libraries, and scrapping the project entirely to restart from scratch did I manage to get the app to compile from my preferred languages into something viewable in the browser.

In addition to wrestling with TypeScript and SCSS, I also had trouble with erroneous errors popping up in Visual Studio Code, even when using [Svelte's VS Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). Though I eventually succeeded in getting my code to compile, I never did get rid of the syntax errors in VS Code, which simply could not comprehend TypeScript and HTML existing in the same file.

Similar tooling issues plagued the early years of React and Vue development, so there's reason to believe Svelte's tooling will come around, but until then it may be rough going.

## The final verdict

I like Svelte a lot; it boasts some impressive performance benchmarks and an easily comprehensible syntax.

The next couple years will tell whether or not it can build the momentum necessary to become a permanent fixture of the frontend landscape. React and Vue (especially React) have a significant head start, and I worry that if Svelte does approach "escape velocity", one of the major tech firms will create an imitator to flood the space with their own tech.

However, I could also see a world in which Svelte joins ReactJS, Vue and Angular as one of the essential building blocks of the modern web. And I hope that happens, because the framework does some very good things. 
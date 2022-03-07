---
tags:
- react.js
- javascript
- css
title: How to make a responsive, sliding mobile menu in React.js
sub_head: A few tips and tricks for tackling a common design technique
featured_image: "/uploads/2022_03_07_sliding_door_1024.jpeg"
additional_images: ''
date_created: 2022-03-21 2:00 PM
date_updated: 
highlighted: false

---
A slide-in mobile menu is an [extremely](https://www.nytimes.com/) [common](https://www.avclub.com/) [design](https://casper.com/m/) [pattern](https://www.converse.com/). As with most web motifs, there are likely as many methods for implementing it as there are implementations.

However, having made a number of sliding menus, here's my take on how to approach this particular component.

## Setting up the project

For this tutorial, I'll spin up a small project using [Create React App](https://create-react-app.dev/). The principles at work here can be applied across frontend libraries, but my syntax assumes we're working with React.js and CSS modules.

## The HTML

If we structure our HTML intelligently, we can use the same markup for our menus on desktop and mobile. 
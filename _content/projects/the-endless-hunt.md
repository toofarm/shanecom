---
tags:
  - firebase
  - D3
  - react.js
  - javascript
title: The Endless Hunt
sub_head: A web application for managing one's job search
featured_image: /uploads/2022_03_06_screen-shot-2022-03-06-at-1-53-08-pm.png
project_web_link: 'https://endlesshunting.com/intro'
project_repo_link: 'https://github.com/toofarm/EndlessHunt'
additional_images: []
highlighted: true
date_created: '2022-03-06 4:00 PM'
date_updated: null
_template: project
---

I developed The Endless Hunt during a period of intense job searching, and the app bears the marks of that process both in its theme and the inordinate amount of time I was able to dedicate to its development.

The Endless Hunt provides a means for the user to keep track of his or her job search. Users can log information about which jobs they've applied to, which interactions they've had with with hiring managers and how they feel about each job in their docket. 

The application then compiles this data and allows users to analyze it through a handful of helpful charts, created using [D3.js](https://d3js.org/).

I built the frontend of this app using React.js. Firebase houses the application data and provides a convenient API.

I originally deployed The Endless Hunt in the months before the release of React 16, and as a result, it is chock-a-block with class-based components. I've lately started to refactor these components into functional components that utilize [React hooks](https://reactjs.org/docs/hooks-intro.html), but that project remains ongoing.

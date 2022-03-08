---
tags:
- react.js
- javascript
- css
title: How to make a responsive, sliding mobile menu in React.js
sub_head: A few tips for tackling a common design technique
featured_image: "/uploads/2022_03_07_sliding_door_1024.jpeg"
additional_images: ''
date_created: 2022-03-21 2:00 PM
date_updated: 
highlighted: false

---
A slide-in mobile menu is an [extremely](https://www.nytimes.com/) [common](https://www.avclub.com/) [design](https://casper.com/m/) [pattern](https://www.converse.com/). As with most web motifs, there are likely as many methods for implementing it as there are implementations.

However, having made a number of sliding menus, here's my take on how to approach this component.

## Setting up the project

For this tutorial, I'll spin up a small project using [Create React App](https://create-react-app.dev/). The principles at work here can be applied across frontend libraries, but my syntax assumes we're working with React.js and CSS modules.

## The HTML

If we structure our HTML intelligently, we can make the same markup serve for our menus on both desktop and mobile.

For this project, I'll create three components:

### App

Which wraps everything

    const App: FC = () => {
        return (
            <div className={styles.App}>
                <Header />
                <main>
                    <h1>A small navigation test</h1>
                    <p>
                        We work hard because we care
                    </p>
                </main>
            </div>
        );
    }
    
    export default App

### Header

    const Header: FC = () => {
        return (
            <header className={styles.app_header}>
                <h1>
                    Website name
                </h1>
                <Navigation />
                <ul className={styles.hamburger_toggle}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
        )
    }
    
    export default Header

and...

### Navigation

    const Navigation: FC = () => {
        return (
            <nav>
                <ul className={styles.link_list}>
                    <li>
                        <a href="#">
                            Link 1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Link 2
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Link 3
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Link 4
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
    
    export default Navigation

Note: The FC that you see after each component declaration comes from TypeScript. It tells the compiler that our function will be returning a Functional Component

After applying some basic CSS, our components render looking like this:

![](/uploads/2022_03_08_screen-shot-2022-03-07-at-4-09-25-pm.png)

Using media queries, I then hide the actual navigation component when the user is viewing on mobile.

Note that I'm not just slapping 'display: none' on the nav component; instead, I'm using the 'transform' property to pull the navigation outside of the viewport.

    @media screen and (max-width: 767px) {
      .main_nav {
        transform: translateX(-200%);
      }
    }

## Toggling the menu on mobile

While looking at the Header component above, you may have noticed an HTML node that initially seems to serve no purpose:

    <ul className={styles.hamburger_toggle}
      tabIndex={0}
      role='button'>
      <li></li>
      <li></li>
      <li></li>
    </ul>

We're actually going to use this empty list to create our 'hamburger' icon that toggles the menu in and out. If you're working on a production app, you might want to import an icon to match the site's visual design, but for our purposes we can whip together a simple icon using CSS:

    .hamburger_toggle {
      display: none;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .hamburger_toggle li {
      margin-bottom: 0.35rem;
      border: 2px solid #888;
      border-radius: 25px;
      width: 2rem;
    }

I've set the toggle button to 'display: none' by default; we can then add a media that displays our icon when we're viewing the website on a mobile phone:

    @media screen and (max-width: 767px) {
      ...
      .hamburger_toggle {
        display: inline-block;
      }
    }

In the Navigation component, you'll notice a similar piece of 'superfluous' markup:

     <ul
    	className={styles.toggle_btn}
        tabIndex={0}
        role='button'>
        <li></li>
        <li></li>
      </ul>

We'll be using this to create our 'close' button so users can toggle the menu "off" if they need to. 

Note that we've decorated both these components with 'role' and 'tabIndex' attributes. This tells screen readers that we intend the elements to be used as buttons.

### Updating state

In order to toggle our menu in and out, we'll employ useState — a [React.js hook](https://reactjs.org/docs/hooks-intro.html). A more complex application might house this value in a Redux store, but useState will serve our purposes here.

After importing useState to our Header component, we'll instantiate a variable, 'showMobileNav', that dictates whether or not the menu will display. This variable defaults to 'false' since we don't want the mobile menu to be visible on page load.

    import React, { FC, useState } from 'react'
    ...
    
    const Header: FC = () => {
        const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    
        return (
            <header className={styles.app_header}>
                <h1>
                    Website name
                </h1>
                <Navigation
                    toggle={showMobileNav}
                    setToggle={setShowMobileNav} />
                <ul className={styles.hamburger_toggle}
                    tabIndex={0}
                    role='button'
                    onClick={() => setShowMobileNav(!showMobileNav)}
                    onKeyPress={() => setShowMobileNav(!showMobileNav)}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
        )
    }
    
    export default Header

Note how we've 
---
tags:
- react.js
- javascript
- css
title: Making a responsive, sliding mobile menu in React.js
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
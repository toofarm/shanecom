/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLink from './HeaderLink'
import useWindowResize from 'hooks/use_window_size'
import styles from './Header.module.scss'

const Header:FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const { width } = useWindowResize()

  useEffect(() => {
    if (width && width <= 767) setShowNav(false)
  }, [width])

  const routes = [
    {
      href: '/posts',
      displayName: 'Posts'
    },
    {
      href : '/projects',
      displayName : 'Projects'
    },
    {
      href : '/experience',
      displayName : 'Experience'
    },
  ]

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Image
            src='/shane_logo_v2.png'
            alt='My little internet home'
            width={120}
            height={75}
          />
        </a>
      </Link>
      <nav className={`${showNav ? styles.pull_right : ''} ${styles.navigation}`}>
        <ul>
          {(width && width <= 767) && <HeaderLink href='/' displayName='Home' />}
          {routes.map((route) => <HeaderLink href={route.href} displayName={route.displayName} key={route.href} />)}
        </ul>
        <ul
          tabIndex={0} 
          className={styles.menu_toggle_btn}
          onClick={() => setShowNav(!showNav)}
          onKeyPress={() => setShowNav(!showNav)}
        >
          <li></li>
          <li></li>
        </ul>
      </nav>
      {(width && width <= 767) && <ul 
        tabIndex={0}
        className={styles.mobile_nav_btn}
        onClick={() => setShowNav(!showNav)}
        onKeyPress={() => setShowNav(!showNav)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>}
    </header>
  )
}

export default Header
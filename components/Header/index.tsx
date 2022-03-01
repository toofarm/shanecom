/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLink from './HeaderLink'
import useWindowResize from 'hooks/use_window_size'
import { useAppDispatch, useAppSelector } from 'hooks/use_redux'
import { setTheme } from 'store/modules/theme'
import styles from './Header.module.scss'
import { EThemes } from 'types'

const Header:FC = () => {
  const theme = useAppSelector(state => state.theme)
  const [showNav, setShowNav] = useState<boolean>(false)
  const { width } = useWindowResize()
  const dispatch = useAppDispatch()

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
            src={`/${theme === EThemes.LIGHT ? 'shane_logo_v2.png' : 'shane_logo_light.png'}`}
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
          <li 
            tabIndex={0}
            className={styles.theme_toggle_btn}
            onClick={() => dispatch(setTheme(theme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK))} 
            onKeyPress={() => dispatch(setTheme(theme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK))}>
            <span 
              className={`${theme === EThemes.DARK ? styles.left : styles.right} 
              ${styles.slider}`}>
              {theme === EThemes.DARK ? '🌑' : '☀️'}
            </span>
          </li>
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
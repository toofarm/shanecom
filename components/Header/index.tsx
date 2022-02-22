import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLink from './HeaderLink'
import styles from './Header.module.scss'

const Header:FC = () => {
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
      <div>
        <Link href='/'>
          <a>
            <Image
              src='/shane_logo.png'
              alt='Shanecom logo'
              width={200}
              height={200}
            />
          </a>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {routes.map((route) => <HeaderLink href={route.href} displayName={route.displayName} key={route.href} />)}
        </ul>
      </nav>
    </header>
  )
}

export default Header
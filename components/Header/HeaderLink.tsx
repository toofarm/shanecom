import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

// Types
type TProps = {
  href: string;
  displayName: string;
}

const HeaderLink:FC<TProps> = ({ href, displayName }) => {
  const router = useRouter()

  return (
    <li className={`${router.asPath === href ? styles.active_route : ''}`}>
      <Link href={href}>
          {displayName}
      </Link>
    </li>
  )
}

export default HeaderLink
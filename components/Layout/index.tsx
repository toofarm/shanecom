import React, { ElementType, FC } from 'react'
import styles from './Layout.module.scss'

// Components
import Header from '../Header'

const Layout:FC = ({ children }) => {
  return (
    <div className={styles.meta_wrap}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
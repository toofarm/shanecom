import React, { FC } from 'react'
import styles from './Layout.module.scss'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout:FC = ({ children }) => {
  return (
    <div className={styles.meta_wrap}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
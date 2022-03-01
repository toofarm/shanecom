import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/use_redux'
import { setTheme } from 'store/modules/theme'
import { EThemes } from 'types'
import applyTheme from 'lib/applyTheme'

import styles from './Layout.module.scss'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout:FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme)

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     dispatch(setTheme(EThemes.DARK))
  //   }
  // }, [])
  
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <div className={styles.meta_wrap} id='#meta_wrap'>
      <div className={styles.content_wrap}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

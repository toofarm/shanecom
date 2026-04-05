import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/use_redux'
import { setTheme } from 'store/modules/theme'
import { EThemes } from 'types'
import applyTheme from 'lib/applyTheme'
import { getThemeFromCookie, setThemeCookie } from 'lib/themeCookie'
import styles from './Layout.module.scss'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'
import Script from 'next/script'

const Layout:FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme)

  // Initialize theme from cookie or system preference, and persist to cookie
  useEffect(() => {
    if (typeof window === 'undefined') return
    const cookieTheme = getThemeFromCookie()
    if (cookieTheme !== null) {
      dispatch(setTheme(cookieTheme))
    } else {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme = preferDark ? EThemes.DARK : EThemes.LIGHT
      dispatch(setTheme(systemTheme))
      setThemeCookie(systemTheme)
    }
  }, [dispatch])

  useEffect(() => {
    applyTheme(theme)
    if (theme === EThemes.LIGHT || theme === EThemes.DARK) {
      setThemeCookie(theme)
    }
  }, [theme])

  return (
    <div className={styles.meta_wrap}>
      {/* GTM  */}
      <Script
        strategy='afterInteractive'
        id='gtm'
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PGSR9BL');
          `
        }}
      />
      {/* End GTM  */}
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

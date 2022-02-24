import React, { FC, useState, useEffect } from 'react'
import format from 'date-fns/format'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer:FC = () => {
  const [year, setYear] = useState<string>('')
  const [copyMsg, setCopyMsg] = useState<string>('Click to copy toofarm@gmail.com')

  const copyEmail = () => {
    navigator.clipboard.writeText('toofarm@gmail.com')
    setCopyMsg('Email copied!')
    setTimeout(() => {
      setCopyMsg('Click to copy toofarm@gmail.com')
    }, 5000)
  }

  useEffect(() => {
    setYear(format(new Date(), 'yyyy'))
  }, [])

  return (
    <footer className={styles.footer_wrap}>
      <div>
        Copyright {year} - Shane Danaher
      </div>
      <ul>
        <li
          onClick={() => copyEmail()}
          onKeyPress={() => copyEmail()}> 
          <div className={styles.fake_link}>
            Email
          </div>
          <div className={styles.copy_msg}>{copyMsg}</div>
        </li>
        <li>
          <Link href='https://github.com/toofarm'>
            <a target='_blank'>
              GitHub
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/shaners/'>
            <a target='_blank'>
              LinkedIn
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
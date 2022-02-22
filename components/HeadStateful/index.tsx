import React, { FC } from 'react'
import Head from 'next/head'

const HeadStateful:FC = () => {
  return (
    <Head>
      <title>Shane&pos;s L&pos;il Internet Home</title>
      <meta name='description' 
        content='Shane&pos;s L&pos;il Internet Home - Software Engineering and Loose Thoughts' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default HeadStateful
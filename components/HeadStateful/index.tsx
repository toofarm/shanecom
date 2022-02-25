/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'
import Head from 'next/head'

// Types 
type TProps = {
  pageTitle: string;
}

const HeadStateful:FC<TProps> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{`${pageTitle} ${pageTitle ? ' | ' : ''}`} Shane Made That</title>
      <meta name='description' 
        content='Shane Made That - Software Engineering and Loose Thoughts' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default HeadStateful
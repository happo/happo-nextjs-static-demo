import Head from 'next/head'
import React from 'react';

import FancyButton from '../FancyButton';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Test app</h1>
      <FancyButton>Click me</FancyButton>
    </div>
  )
}

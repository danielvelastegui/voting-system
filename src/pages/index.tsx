import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [countYes, setCountYes] = useState(0);
  const [countNo, setCountNo] = useState(0);

  const handleYesClick = () => {
    setCountYes(countYes + 1);
  };

  const handleNoClick = () => {
    setCountNo(countNo + 1);
  };

  return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
            <h1 className={styles.question}>¿Está de acuerdo con la destitución del presidente Guillermo Lasso?</h1>
            <button onClick={handleYesClick} className={styles.option}>Sí ({countYes})</button>
            <button onClick={handleNoClick} className={styles.option}>No ({countNo})</button>
        </div>
      </>

  );
}

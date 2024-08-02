'use client'

// package imports
import { useEffect, useState } from 'react';
import { color, motion, useAnimation } from 'framer-motion';
import styles from './page.module.css';
import Link from 'next/link';

const WindowsLoader = () => {
  // set progress at 0
  const [progress, setProgress] = useState(0);

  // progress function
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 1;
        if (nextProgress === 100) {
          clearInterval(interval);
        }
        return nextProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  })

  // message change function

  return (
    <main className={styles.body}>
      <div className={styles.window}>
        <div className={styles.title_bar}>
          <div className={styles.title}>
            NOTIFICATION
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <div>
              <Message />
            </div>
          </div>
        </div>
        <div className={styles.loading_bar}>
              <motion.div
                className={styles.progress}
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.0 }}
              />
              <div className={styles.counter}>{`${progress}%`}</div>
        </div>
      </div>
    </main>
  );
};

export default function Home(){
  const [loading, setLoading] = useState(true);
  const text = "You have risked you life in the lowliest of dungeons and being the world weakest. This secret quest is for you to train and raise your level to rise to the world strongest!".split(" ");

  // set a timeout to simulate loading for 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  // show the loader while loading 
  // if loading is false, show the content
  if (loading) {
    return (
      <>
        <WindowsLoader />
      </>
    )
  }

  return (
    <div className={styles.body}>
      <div className={styles.blog}>
        <h1 className={styles.header}>
          Welcome Player
        </h1>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}

        <div className={styles.footer}>
          <text>
            © Kean Teng 2024 &nbsp;
          </text>
          <a className={styles.link} href="https://github.com/keanteng/nextjs-blog">
          Github
          </a>
        </div>
      </div>
    </div>
  )
};

function Message() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // show the loader while loading 
  // if loading is false, show the content
  if (loading) {
    return (
      <div className={styles.message}>
        [YOU HAVE SATISFIED ALL THE CONDITIONS NECESSARY FOR COMPLETING THE SECRET QUEST.
        <text className={styles.key_message}> 'COURAGE OF THE WEAK'</text>
        ]
      </div>
    ) 
  }

  return (
    <div className={styles.message}>
    [YOU HAVE OBTAINED THE RIGHT TO BECOME A <text className={styles.key_message}>'PLAYER'</text>.]
    </div>
  )
}
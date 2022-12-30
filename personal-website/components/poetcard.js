import styles from './poetcard.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Poetcard( {children} ) {
    return (
       <>
        <div className={styles.highlights}>
            <Link href="projects/poems/darkness">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Darkness (2020)</p>
                    </div>
                    <Image src="/images/philosophy2.png" 
                    alt="Poetry titled 'Darkness'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="./poems/deteriorating">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Deteriorating (2019)</p>
                    </div>
                    <Image src="/images/philosophy2.png" 
                    alt="Poetry titled 'Deteriorating'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/philosophy">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Philosophy I (2021)</p>
                    </div>
                    <Image src="/images/philosophy2.png" 
                    alt="Poetry titled 'Philosopy I'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/unattainable">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Unattainable (2018)</p>
                    </div>
                    <Image src="/images/philosophy2.png" 
                    alt="Poetry titled 'Unattainable'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/split">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Split (2020)</p>
                    </div>
                    <Image src="/images/philosophy2.png" 
                    alt="Poetry titled 'Split'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/definition">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Definition (2017)</p>
                    </div>
                    <Image 
                    src="/images/philosophy2.png" 
                    alt="Poetry titled 'Definition'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/philosophy2">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Philosophy II (2021)</p>
                    </div>
                    <Image 
                    src="/images/philosophy2.png" 
                    alt="Poetry titled 'Philosophy II'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/narcissism">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Narcissism (2021)</p>
                    </div>
                    <Image 
                    src="/images/philosophy2.png" 
                    alt="Poetry titled 'Narcissism'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

            <Link href="projects/poems/obscurity">
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <p>Obscurity (2021)</p>
                    </div>
                    <Image 
                    src="/images/philosophy2.png" 
                    alt="Poetry titled 'Obscurity'"
                    height="200"
                    width="200"
                    />
                </div>
            </Link>

        </div>
        </>

    );
}
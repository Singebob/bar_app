import { Button } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Bars</title>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Button>Test</Button>
            </main>
        </>
    );
}

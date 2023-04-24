import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Bars</title>
            </Head>
            <ChakraProvider>
                <main>
                    <Component {...pageProps} />
                </main>
            </ChakraProvider>
        </>
    );
}

export default MyApp;

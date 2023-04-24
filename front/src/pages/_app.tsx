import { ChakraProvider, Container } from '@chakra-ui/react';
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
                    <Container maxW="container.lg">
                        <Component {...pageProps} />
                    </Container>
                </main>
            </ChakraProvider>
        </>
    );
}

export default MyApp;

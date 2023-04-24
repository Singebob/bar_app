import { AddIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AlertTitle, Button, Center } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Alert status="info" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
                <AlertIcon />
                <AlertTitle>Pas de boisson disponible pour le moment.</AlertTitle>
            </Alert>
            <Center marginTop={4}>
                <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" rounded={5}>
                    Ajouter votre première boisson
                </Button>
            </Center>
        </>
    );
}

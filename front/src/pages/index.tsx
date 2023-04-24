import { AddIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, AlertTitle, Button } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Alert status="info" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
                <AlertIcon />
                <AlertTitle>Pas de boisson disponible pour le moment.</AlertTitle>
            </Alert>
            <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                Ajouter votre première boisson
            </Button>
        </>
    );
}

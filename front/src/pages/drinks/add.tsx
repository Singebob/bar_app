import { Button, Heading, Input, Stack, useToast } from '@chakra-ui/react';

export default function AddDrink() {
    const toast = useToast();
    return (
        <Stack alignItems={'center'}>
            <Heading>Ajouter une boisson</Heading>
            <Input maxWidth={360}></Input>
            <Button
                onClick={() => toast({ title: 'Pas implémenté', status: 'info', duration: 5000, isClosable: true })}
            >
                Ajouter
            </Button>
        </Stack>
    );
}

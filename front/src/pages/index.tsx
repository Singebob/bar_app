import { AddIcon } from '@chakra-ui/icons';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button,
    Card,
    CardBody,
    Center,
    Grid,
    Heading,
    Img,
    Link,
    Spinner,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

import { getDrinks } from '@/api/DrinkApi';
import { Drink } from '@/types/bar';

export default function Home() {
    const [drinks, setDrinks] = useState<Drink[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchDrinks = async () => {
        const drinksFetched = await getDrinks();
        setDrinks(drinksFetched);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    if (isLoading) {
        return (
            <Center>
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Center>
        );
    }

    return (
        <>
            {drinks && drinks.length > 0 ? (
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}
                    autoFlow={{ base: 'row', md: 'column' }}
                    autoColumns={{ base: 'auto', md: '1fr' }}
                    gap={6}
                >
                    {drinks &&
                        drinks.map((drink) => (
                            <Card key={drink.name} data-testid={drink.name} maxWidth={300}>
                                <CardBody>
                                    {drink.image ? (
                                        <Img src={drink.image} alt={drink.name} />
                                    ) : (
                                        <Center height={200}>Pas d&apos;image</Center>
                                    )}
                                    <Stack mt={6} spacing={3}>
                                        <Stack direction="row" alignItems="center">
                                            <Heading as="h3">{drink.name}</Heading>
                                            <Text color="blue.600" fontSize="2x">
                                                {drink.price.toFixed(2)} €
                                            </Text>
                                        </Stack>
                                        <Tag size="lg" maxWidth="min-content">
                                            {drink.category}
                                        </Tag>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                </Grid>
            ) : (
                <Alert
                    status="info"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    maxWidth={400}
                    mx={'auto'}
                    textAlign="center"
                    rounded={5}
                >
                    <AlertIcon />
                    <AlertTitle>Pas de boisson disponible pour le moment.</AlertTitle>
                </Alert>
            )}

            <Center marginTop={4}>
                <Link as={NextLink} href="/drinks/add">
                    <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" rounded={5}>
                        {drinks && drinks.length > 0 ? 'Ajouter une boisson' : 'Ajouter votre première boisson'}
                    </Button>
                </Link>
            </Center>
        </>
    );
}

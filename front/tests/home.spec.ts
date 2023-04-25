import { test, expect, Locator } from '@playwright/test';

import { Drink } from '@/types/bar';

const drinks = [
    {
        name: 'Coca',
        category: 'Soda',
        price: 2.5,
        image: 'https://i0.wp.com/commechezmams.fr/wp-content/uploads/2021/01/COCA-33cl.jpg?fit=800%2C800&ssl=1',
    },
    {
        name: 'Orangina',
        category: 'Soda',
        price: 2.5,
        image: 'https://www.coursesu.com/media/produit/300x300/orangina-boisson-gazeuse-a-l-orange-33cl-0-33l-0-33l-1-1.jpg',
    },
    {
        name: 'Ice Tea',
        category: 'Soda',
        price: 2.5,
        image: 'https://www.coursesu.com/media/produit/300x300/ice-tea-peche-boisson-gazeuse-au-the-peche-33cl-0-33l-0-33l-1-1.jpg',
    },
];

async function expectDrink(locator: Locator, drink: Drink) {
    await expect(locator.getByRole('heading', { name: drink.name, level: 3 })).toBeVisible();
    await expect(locator.getByText(drink.category)).toBeVisible();
    await expect(locator.getByText(`${drink.price.toFixed(2)} €`)).toBeVisible();
    await expect(locator.getByAltText(drink.name)).toBeVisible();
}

const API_PATH = '**/api/drinks';
const CONTENT_TYPE = 'application/json';

test('when no drinks are available, the user is informed with a alert', async ({ page }) => {
    await page.route(API_PATH, async (route) => {
        await route.fulfill({
            status: 200,
            contentType: CONTENT_TYPE,
            body: JSON.stringify([]),
        });
    });
    await page.goto('/');

    await expect(
        page.getByRole('alert').filter({ hasText: 'Pas de boisson disponible pour le moment.' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ajouter votre première boisson' })).toBeVisible();
});

test('when one drink is available, the user can see it', async ({ page }) => {
    const drink = drinks[0];
    await page.route(API_PATH, async (route) => {
        await route.fulfill({
            status: 200,
            contentType: CONTENT_TYPE,
            body: JSON.stringify([drink]),
        });
    });
    await page.goto('/');

    const cardDrink = await page.getByTestId(drink.name);
    await expectDrink(cardDrink, drink);
    await expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
});

test('when multiple drinks are available, the user can see them', async ({ page }) => {
    await page.route(API_PATH, async (route) => {
        await route.fulfill({
            status: 200,
            contentType: CONTENT_TYPE,
            body: JSON.stringify(drinks),
        });
    });
    await page.goto('/');

    for (const drink of drinks) {
        const cardDrink = await page.getByTestId(drink.name);
        await expectDrink(cardDrink, drink);
    }
    await expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
});

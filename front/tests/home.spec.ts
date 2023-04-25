import { expect, Locator } from '@playwright/test';

import { Drink } from '@/types/bar';

import { testMockNoDrinks, testMockOneDrink, testMockMultipleDrinks } from './fixtures/api.mock';
import drinks from './fixtures/drinks.json';

async function expectDrink(locator: Locator, drink: Drink) {
    await expect(locator.getByRole('heading', { name: drink.name, level: 3 })).toBeVisible();
    await expect(locator.getByText(drink.category)).toBeVisible();
    await expect(locator.getByText(`${drink.price.toFixed(2)} €`)).toBeVisible();
    await expect(locator.getByAltText(drink.name)).toBeVisible();
}

testMockNoDrinks('when no drinks are available, the user is informed with a alert', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('alert').filter({ hasText: 'Pas de boisson disponible pour le moment.' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ajouter votre première boisson' })).toBeVisible();
});

testMockOneDrink('when one drink is available, the user can see it', async ({ page }) => {
    const drink = drinks[0];
    await page.goto('/');

    const cardDrink = await page.getByTestId(drink.name);
    await expectDrink(cardDrink, drink);
    await expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
});

testMockMultipleDrinks('when multiple drinks are available, the user can see them', async ({ page }) => {
    await page.goto('/');

    for (const drink of drinks) {
        const cardDrink = await page.getByTestId(drink.name);
        await expectDrink(cardDrink, drink);
    }
    await expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
});

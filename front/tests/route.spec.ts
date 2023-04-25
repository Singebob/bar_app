import { expect, test } from '@playwright/test';

import { testMockOneDrink } from './fixtures/api.mock';

const ADD_DRINK_PATH = '/drinks/add';

testMockOneDrink('should be able to route from home to add drink', async ({ page }) => {
    await page.goto('/');

    expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
    await page.getByRole('button', { name: 'Ajouter une boisson' }).click();
    await page.waitForURL(ADD_DRINK_PATH);
    expect(page.url()).toContain(ADD_DRINK_PATH);
});

test('should display toast when drink is added', async ({ page }) => {
    await page.goto(ADD_DRINK_PATH);

    await page.getByRole('button', { name: 'Ajouter' }).click();
    await expect(page.getByText('Pas implémenté')).toBeVisible();
});

import { expect } from '@playwright/test';

import { testMockOneDrink } from './fixtures/api.mock';

testMockOneDrink('should be able to route from home to add drink', async ({ page }) => {
    await page.goto('/');

    expect(page.getByRole('button', { name: 'Ajouter une boisson' })).toBeVisible();
    await page.getByRole('button', { name: 'Ajouter une boisson' }).click();
    await page.waitForURL('/drinks/add');
    expect(page.url()).toContain('/drinks/add');
});

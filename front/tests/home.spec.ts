import { test, expect } from '@playwright/test';

test('when no drinks are available, the user is informed with a alert', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('alert').filter({ hasText: 'Pas de boisson disponible pour le moment.' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ajouter votre première boisson' })).toBeVisible();
    // await expect(page.getByRole('button', { name: 'Ajouter votre première boisson' })).toHaveAttribute('href', '#');
});

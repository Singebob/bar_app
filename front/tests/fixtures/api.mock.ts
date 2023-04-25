import { test as base } from '@playwright/test';

import drinks from './drinks.json';

const API_PATH = '**/api/drinks*';
const CONTENT_TYPE = 'application/json';

export const testMockNoDrinks = base.extend({
    page: async ({ page }, use) => {
        await page.route(API_PATH, async (route) => {
            await route.fulfill({
                status: 200,
                contentType: CONTENT_TYPE,
                body: JSON.stringify([]),
            });
        });
        await use(page);
    },
});

export const testMockOneDrink = base.extend({
    page: async ({ page }, use) => {
        await page.route(API_PATH, async (route) => {
            await route.fulfill({
                status: 200,
                contentType: CONTENT_TYPE,
                body: JSON.stringify([drinks[0]]),
            });
        });
        await use(page);
    },
});

export const testMockMultipleDrinks = base.extend({
    page: async ({ page }, use) => {
        await page.route(API_PATH, async (route) => {
            await route.fulfill({
                status: 200,
                contentType: CONTENT_TYPE,
                body: JSON.stringify(drinks),
            });
        });
        await use(page);
    },
});

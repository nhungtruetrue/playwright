import { test as base, expect, type Page } from '@playwright/test';

type AuthFixtures = {
    authedPage: Page;
};

export const test = base.extend<AuthFixtures>({
    authedPage: async ({ page }, use) => {
        const raw = process.env.TOKEN;
        if (!raw) throw new Error('Missing TOKEN in env');

        const token = raw.startsWith('Bearer ') ? raw : `Bearer ${raw}`;

        // Inject BEFORE app loads (Nuxt Auth localStorage key)
        await page.addInitScript((t) => {
            localStorage.setItem('auth._token.local', t);
            // Nếu dự án bạn có dùng strategy:
            // localStorage.setItem('auth.strategy', 'local');
        }, token);

        await use(page);
    },
});

export { expect };
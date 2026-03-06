import {
    BrowserContext,
    PlaywrightTestArgs,
    PlaywrightTestOptions,
    PlaywrightWorkerArgs,
    PlaywrightWorkerOptions
} from "@playwright/test";
export async function injectToken(context: BrowserContext) {
    const token = process.env.TOKEN;

    await context.addCookies([
        {
            name: 'auth._token.local',
            value: token!,
            domain: process.env.TOKEN_DOMAIN,
            path: '/',
            httpOnly: false,
            secure: false,
        }
    ])
}
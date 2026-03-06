import {test as setup} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";

setup("auth setup", async ({page}) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login("nhungdth@rabiloo.com","a12345678X");
    await page.waitForSelector('')
    await page.context().storageState({path:'storageState.json'});
});
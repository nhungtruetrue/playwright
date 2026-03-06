import {test,expect} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
test.describe("Auth-login",()=>{
    test("login sucess", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("nhungdth@rabiloo.com", "a12345678X");

        await expect(page).toHaveURL("https://rabiloo.stg2.weekly.vn/");
    })
    test("login fail", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("nhungdth@rabiloo.com", "a1234568X");
        await expect(loginPage.error_mess).toBeVisible();
    })
    test("validate email", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("nhung", "a1234568X");
        await expect(loginPage.error_email).toBeVisible();
    })
    test("validate password", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("nhungdth@rabiloo.com", "a1");
        await expect(loginPage.error_password).toBeVisible();
    })
})
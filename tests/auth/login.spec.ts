import {test,expect} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
test.describe("Auth-login",()=>{
    test("login sucess", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("nhungdth@rabiloo.com", "a12345678X");

        await expect(page).toHaveURL("https://rabiloo.stg2.weekly.vn/");
    })
})
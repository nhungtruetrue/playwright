import {test, expect} from "@playwright/test";
//import {injectToken} from "../../utils/injectToken";
import {Information_project_Page} from "../../pages/Information_project_Page";
// test.beforeEach(async ({context}) => {
//     await injectToken(context);
// });
// test.describe('Project module (logged in)', () => {
//     test.use({ storageState: 'storageState.json' });
test.describe("Delete soft", () => {
    test.use({ storageState: 'storageState.json' });
    test("Validate name project", async ({page}) => {
        const info = new Information_project_Page(page);
        await info.goto();
        await info.delete_soft.click();
        await info.name_project.fill("qwqw");
        await expect(info.error_project).toContainText('Vui lòng nhập chính xác tên của dự án');
    })
})
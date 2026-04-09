import {test, expect} from '@playwright/test';
import {employee_list_Page} from "../../pages/HRM/employee_list_Page";

test.describe("Click menu", () => {
    test.use({ storageState: 'storageState.json' });
    test("Click tab working", async ({page}) => {
        const employee_list = new employee_list_Page(page);
        await employee_list.goto();
        await employee_list.tab_working.click();
        await expect(page).toHaveURL(/.*status=working/);
})
test("Click tab temporary off work", async ({page}) => {
    const employee_list = new employee_list_Page(page);
    await employee_list.goto();
    await employee_list.tab_temporary_off_work.click();
    await expect(page).toHaveURL(/.*status=temporary_off_work/);
})
test("Click tab quit", async ({page}) => {
    const employee_list = new employee_list_Page(page);
    await employee_list.goto();
    await employee_list.tab_quit.click();
    await expect(page).toHaveURL(/.*status=quit/);
})
test("Click tab all", async ({page}) => {
    const employee_list = new employee_list_Page(page);
    await employee_list.goto();
    await employee_list.tab_all.click();
    await expect(page).toHaveURL(/.*status=all/);
}
)       
})
test.describe("Export ", () => {
    test.use({ storageState: 'storageState.json' });
    test("Click button Export", async ({page}) => {
        const employee_list = new employee_list_Page(page);
        await employee_list.goto();
        await employee_list.btn_export.click();
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            employee_list.btn_exportAll.click()
        ]);
        const filename = download.suggestedFilename();
        expect(filename).toContain('.xlsx');
    });
test("Click button import", async ({page}) => {
    const employee_list = new employee_list_Page(page);
    await employee_list.goto();
    await employee_list.btn_import.click();
    await expect(page).toHaveURL(/.*employee\/import/);
})  
})
import {test, expect} from '@playwright/test';
import {employee_list_Page} from "../../pages/HRM/employee_list_Page";
//TC_01: Verify that user can click button Export and download file successfully
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
//TC_02: Verify that user can click button Import and pop up form import file successfully
test("Click button import", async ({page}) => {
    const employee_list = new employee_list_Page(page);
    await employee_list.goto();
    await employee_list.btn_import.click();
    await expect(page).toHaveURL(/.*employee\/import/);
})  
})
//TC_03: Verify that user can click tab and filter employee list successfully
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
//TC_04: Verify that user can click button create and navigate to form create employee successfully
test.describe("Click button create", () => {
    test.use({ storageState: 'storageState.json' });
    test("Click button create", async ({page}) => {
        const employee_list = new employee_list_Page(page);
        await employee_list.goto();
   //   await expect(page).toHaveURL(/.*hrm\/employee/);
        await employee_list.btn_create.click();
        await expect(page).toHaveURL(/.*employee\/create/);
    }
)
})

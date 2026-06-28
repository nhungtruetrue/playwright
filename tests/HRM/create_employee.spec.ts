import { Page,test,expect } from "@playwright/test";
import { employee_Data } from "../../data/HRM/Employee_Data";
import { create_employee_Page } from "../../pages/HRM/create_employee_Page";
let createEmployeePage: create_employee_Page;
test.describe("Create employee", () => {
    test.use({ storageState: 'storageState.json' });
    test.beforeEach(async({page})=>{
        createEmployeePage = new create_employee_Page(page);
        await createEmployeePage.goto();
    });
    test('Create employee with valid data', async ({page}) => {
        await createEmployeePage.create_employee(employee_Data.validUser);
        await expect(page.getByText(/Thành công/i)).toBeVisible();
    });

    test('Create employee with invalid email', async ({page}) => {
        await createEmployeePage.create_employee(employee_Data.invalidEmail);
        await expect(createEmployeePage.getError("Email không hợp lệ")).toBeVisible;
    });

    test('Create employee with duplicate email', async({page})=>{
        await createEmployeePage.create_employee(employee_Data.DupEmail);
        await expect(createEmployeePage.getError("Email đã được sử dụng")).toBeVisible;
    })
});

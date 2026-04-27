import { Page,test } from "@playwright/test";
import { employee_Data } from "../../data/HRM/Employee_Data";
import { create_employee_Page } from "../../pages/HRM/create_employee_Page";

test.describe("Create employee", () => {
    test.use({ storageState: 'storageState.json' });
    test('Create employee with valid data', async ({ page }) => {
    const createEmployeePage = new create_employee_Page(page);
    await createEmployeePage.goto();
    await createEmployeePage.create_employee(employee_Data.validUser);
});

    test('Create employee with invalid email', async ({ page }) => {
    const createEmployeePage = new create_employee_Page(page);
    await createEmployeePage.goto();
    await createEmployeePage.create_employee(employee_Data.invalidEmail);
});
});

import {Page, Locator, expect} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly error: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByPlaceholder("Nhập địa chỉ email");
        this.password=page.getByPlaceholder("Nhập mật khẩu");
        this.submit= page.getByRole("button", { name: /^Đăng nhập$/ });
        this.error=page.getByText(/tài khoản hoặc mật khẩu không chính xác/i);
    }
    async goto(){
        await this.page.goto("/login");
    }
    async login(email: string, password: string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submit.click();
    }
    async expectError(text: RegExp | string){
        await expect(this.error).toBeVisible();
        await expect(this.error).toContainText("Tài khoản hoặc mật khẩu không chính xác");
    }
}
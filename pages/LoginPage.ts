import {Page, Locator, expect} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly error_mess: Locator;
    readonly error_email: Locator;
    readonly error_password: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByPlaceholder("Nhập địa chỉ email");
        this.password=page.getByPlaceholder("Nhập mật khẩu");
        this.submit= page.getByRole("button", { name: /^Đăng nhập$/ });
        this.error_mess=page.getByText(/tài khoản hoặc mật khẩu không chính xác/i);
        this.error_email=page.getByText(/Bạn phải nhập vào một email hợp lệ/i);
        this.error_password=page.getByText(/Mật khẩu phải ít nhất 6 kí tự/i);
    }
    async goto(){
        await this.page.goto("/login");
    }
    async login(email: string, password: string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submit.click();
    }
    // async expectError(text: RegExp | string){
    //     await expect(this.error_mess).toBeVisible();
    //     await expect(this.error_mess).toContainText("Tài khoản hoặc mật khẩu không chíanh xác");
    // }
}
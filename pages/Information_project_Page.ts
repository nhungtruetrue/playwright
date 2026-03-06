import {Page, Locator} from "@playwright/test";
export class Information_project_Page {
    readonly page: Page;
    readonly btn_update: Locator;
    readonly delete_soft: Locator;
    readonly btn_delete: Locator;
    readonly name_project: Locator;
    readonly error_project: Locator;

    constructor(page: Page) {
        this.page = page;
        this.delete_soft = page.locator('button',{hasText:/Tạm xóa dự án/i});
        this.btn_delete = page.getByRole("button",{name: /^Xóa dự án$/});
        this.btn_update = page.getByRole("button",{name: /^Cập nhật$/});
        this.error_project = page.locator('.el-message-box__errormsg');
        this.name_project = page.getByPlaceholder(/Vui lòng nhập tên dự án/i);
    }
    async goto() {
        await this.page.goto("/project/spy013/information")
    }
}
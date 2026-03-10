import {Page,Locator} from "@playwright/test";

export class meetingNote{
    readonly page: Page;
    readonly btn_create: Locator;
    readonly create_at: Locator;
    readonly type_remind: Locator;
    readonly type_timeline: Locator;
    readonly btn_cancel: Locator;
    readonly btn_save: Locator;

    constructor(page:Page) {
        this.page=page;
        this.btn_create= page.getByRole("button",{name:/^Tạo mới$/});
        this.create_at= page.getByPlaceholder("Chọn ngày tạo");
        //this.type_remind=page.getByRole()
        this.btn_save=page.getByRole("button",{name:/^Lưu$/});
        this.btn_cancel=page.getByRole("button",{name:/^Hủy$/});
    }
    async goto(){
        await this.page.goto("/project/spy013/project-report/integration");
    }
    async create_meetingNote(){

    }
}
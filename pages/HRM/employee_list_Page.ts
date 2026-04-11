import {Page, Locator} from "@playwright/test";
export class employee_list_Page{
    readonly page : Page;
    readonly btn_create: Locator;
    readonly btn_import : Locator;
    readonly btn_export : Locator;
    readonly tab_working : Locator;
    readonly tab_temporary_off_work : Locator;
    readonly tab_quit: Locator;
    readonly tab_all : Locator;
    readonly btn_exportAll : Locator;
    readonly btn_Cancel : Locator;


    constructor (page : Page){
        this.page = page;
        this.btn_create = page.getByRole('button', { name: /Thêm mới/i });
        this.btn_export = page.getByRole('button',{name:/Xuất excel/i});
        this.btn_exportAll = page.getByRole('button',{name:/Xuất tất cả/i});
        this.btn_import = page.getByRole('button',{name:/Nhập excel/i});

        this.tab_working = page.locator('div',{hasText:/Đang làm/i});
        this.tab_temporary_off_work = page.locator('div',{hasText:/Tạm nghỉ/i});
        this.tab_quit = page.locator('div',{hasText:/Nghỉ việc/i});
        this.tab_all = page.locator('div',{hasText:/Tất cả/i});
        this.btn_Cancel = page.locator('button',{hasText:/Hủy/i});
        }
    async goto(){
        await this.page.goto("/hrm");
    }
}



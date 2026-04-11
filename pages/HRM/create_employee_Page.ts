import { Page, Locator } from "@playwright/test";
export class create_employee_Page{
    readonly page : Page;
    readonly input_name: Locator;
    readonly input_id: Locator;
    readonly input_nickname: Locator;
    readonly input_email: Locator;
    readonly input_codeTimesheet: Locator;
    readonly input_empoymentType: Locator;
    readonly input_startDate: Locator;
    readonly input_status: Locator;

    constructor (page : Page){
        this.page = page;
        this.input_name = page.getByLabel('Tên nhân sự');
        this.input_id = page.getByLabel('Mã nhân sự');
        this.input_nickname = page.getByLabel('Nickname');
        this.input_email = page.getByLabel('Email');
        this.input_codeTimesheet = page.getByLabel('Mã chấm công');
        this.input_empoymentType = page.getByLabel('Hình thức làm việc');
        this.input_startDate = page.getByLabel('Ngày bắt đầu');
        this.input_status = page.getByLabel('Trạng thái');
         }
    async goto(){
        await this.page.goto("/hrm/employee/create");
    }
    async create_employee(name: string, id: string, nickname: string, email: string, codeTimesheet: string, empoymentType: string, startDate: string, status: string){
        await this.input_name.fill(name);
        await this.input_id.fill(id);
        await this.input_nickname.fill(nickname);
        await this.input_email.fill(email);
        await this.input_codeTimesheet.fill(codeTimesheet);
        await this.input_empoymentType.selectOption(empoymentType);
        await this.input_startDate.fill(startDate);
        await this.input_status.selectOption(status);
    }

}
    
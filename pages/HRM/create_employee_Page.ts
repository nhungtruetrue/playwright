import { Page, Locator } from "@playwright/test";
import { Employee } from "../../models/employee";
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
    readonly button_Save: Locator;

    constructor (page : Page){
        this.page = page;
        this.input_name = page.getByLabel(/Tên nhân sự/i);
        this.input_id = page.getByLabel(/Mã nhân sự/i);
        this.input_nickname = page.getByLabel(/Nickname/i);
        this.input_email = page.getByLabel(/Email/i);
        this.input_codeTimesheet = page.getByLabel(/Mã chấm công/i);
        this.input_empoymentType = page.getByLabel(/Hình thức làm việc/i);
        this.input_startDate = page.getByLabel(/Ngày bắt đầu/i);
        this.input_status = page.getByLabel(/Trạng thái/i);
        this.button_Save = page.getByRole('button', { name: 'Lưu' });
         }
    async goto(){
        await this.page.goto("/hrm/employee/create");
    }

    async create_employee(employee: Employee){
        await this.input_name.fill(employee.name);
        await this.input_id.fill(employee.id);
        await this.input_nickname.fill(employee.nickname);
        await this.input_email.fill(employee.email);
        await this.input_codeTimesheet.fill(employee.codeTimesheet);
        await this.input_empoymentType.fill(employee.empoymentType);
        await this.input_startDate.fill(employee.startDate);
        await this.input_status.fill(employee.status);
        await this.button_Save.click();
    }
     getError(message:string){
        return this.page.getByText(message);
    }

}
    
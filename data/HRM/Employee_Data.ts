import { start } from "node:repl";

const uniqueId = Date.now();
let counter = 200;
export const employee_Data = {
    validUser: {
        name: `Nguyen Van A`,
        id: `counter++`,
        nickname: `NVA`,
        email: `auto_${uniqueId}@gmail.com`,
        startDate: `27-04-2026`,
        status: `Đang làm việc`,
        codeTimesheet: `CT${counter}`,
        empoymentType: `Toàn thời gian`
    },
    invalidEmail:{
        name: `Nguyen Van A`,
        id: `counter++`,
        nickname: `NVA`,
        email: `auto_${uniqueId}@gmail`,
        startDate: `27-04-2026`,
        status: `Đang làm việc`,
        codeTimesheet: `CT${counter}`,
        empoymentType: `Toàn thời gian`
    },
    DupEmail:{
        name: `Nguyen Van A`,
        id: `counter++`,
        nickname: `NVA`,
        email: `auto_${uniqueId}@gmail`,
        startDate: `27-04-2026`,
        status: `Đang làm việc`,
        codeTimesheet: `CT${counter}`,
        empoymentType: `Toàn thời gian`
    },
    Dupid:{
        name: `Nguyen Van A`,
        id: `1`,
        nickname: `NVA`,
        email: `auto_${uniqueId}@gmail`,
        startDate: `27-04-2026`,
        status: `Đang làm việc`,
        codeTimesheet: `CT${counter}`,
        empoymentType: `Toàn thời gian`
    }
}
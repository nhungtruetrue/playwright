import {Role} from "./roles";
export class AccountProvider{
    static get(role: Role){
        switch(role){
            case Role.Admin:
                return {
                    username: process.env.ADMIN_USERNAME!,
                    password: process.env.ADMIN_PASSWORD!
                }   
            }
        }
    }
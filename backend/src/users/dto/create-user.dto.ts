import { userRole } from "@prisma/client";

export class CreateUserDto {
    username : string;
    emailAddress : string;
    password : string;
    firstName : string;
    lastName : string;
    telephoneNumber : number;
    customerType : userRole;   
}

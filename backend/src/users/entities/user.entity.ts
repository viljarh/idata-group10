import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "@prisma/client";

export class User {
    @ApiProperty()
    customerId: number;

    @ApiProperty()
    username : string;

    @ApiProperty()
    emailAddress : string;

    @ApiProperty()
    password : string;

    @ApiProperty()
    firstName : string;

    @ApiProperty()
    lastName : string;

    @ApiProperty()
    telephoneNumber : number;

    @ApiProperty()
    customerType : Customer;



}

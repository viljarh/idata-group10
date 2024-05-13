import { ApiProperty } from "@nestjs/swagger";
import { userRole } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    emailAddress: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    phoneNumber: number;

    @IsString()
    @IsEnum(userRole)
    @ApiProperty({ enum: userRole, default: userRole.VISITOR })
    customerType?: userRole;

}

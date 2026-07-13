import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';

export class CreateStudent {
    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    surname!: string;

    @IsNotEmpty()
    @IsPhoneNumber('AR')
    phone!: string;

    @IsNotEmpty()
    @IsDateString()
    submissionDate!: Date;

    @IsOptional()
    @IsString()
    secondName?: string;
}

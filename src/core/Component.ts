import { IsString, IsOptional, IsDefined, IsEnum } from 'class-validator';
import { ComponentEnum } from '../enums/ComponentEnum';

export abstract class Component {
    @IsDefined()
    @IsString()
    //@IsEnum(ComponentEnum)
    type: string;
    @IsOptional()
    @IsString()
    description?: string;
}

import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Component } from '../core/Component';
export class ValidateComponentRequest{
    @ValidateNested()
    //@Type(() => Component)
    @IsNotEmpty()
    component: Component;
} 
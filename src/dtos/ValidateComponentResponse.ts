import { HttpStatus } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class ValidateComponentResponse{
    isValid?: boolean;
    error?: string;
    errors: ValidationError[];
}
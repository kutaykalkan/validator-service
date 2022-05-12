import { ValidationError } from "class-validator";
export declare class ValidateComponentResponse {
    isValid?: boolean;
    error?: string;
    errors: ValidationError[];
}

import { Component } from './core/Component';
import { GenericValidationPipe } from './Validation/Pipes/GenericValidationPipe';
export declare class AppService {
    private validationPipe;
    constructor(validationPipe: GenericValidationPipe);
    getHello(): string;
    getComponentValidation(component: Component): Promise<boolean>;
}

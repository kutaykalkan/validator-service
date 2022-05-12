import { AppService } from './app.service';
import { ValidateComponentRequest } from './dtos/ValidateComponentRequest';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getValidation(request: ValidateComponentRequest): Promise<ValidateComponentRequest>;
}

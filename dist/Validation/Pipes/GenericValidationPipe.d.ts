import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class GenericValidationPipe implements PipeTransform<any> {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private toValidate;
}

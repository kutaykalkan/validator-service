import { ArgumentMetadata, BadRequestException, Injectable } from '@nestjs/common';
import { Component } from './core/Component';
import { GenericValidationPipe } from './Validation/Pipes/GenericValidationPipe';
import { Resistor } from './core/Resistor';
import { Transistor } from './core/Transistor';
import { Capacitor } from './core/Capacitor';
import { ComponentEnum } from './enums/ComponentEnum';

@Injectable()
export class AppService {
  constructor(private validationPipe: GenericValidationPipe){}
  getHello(): string {
    return 'Hello World!';
  }
  async getComponentValidation(component: Component): Promise<boolean> {
    await this.validationPipe.transform(component, <ArgumentMetadata>{ metatype : Component});
    switch(component.type){
      case ComponentEnum.resistor:
        return await this.validationPipe.transform(component as Resistor, <ArgumentMetadata>{ metatype : Resistor});
      case ComponentEnum.transistor:
        return await this.validationPipe.transform(component as Transistor, <ArgumentMetadata>{ metatype : Transistor});
      case ComponentEnum.capacitor:
        return await this.validationPipe.transform(component as Capacitor, <ArgumentMetadata>{ metatype : Capacitor});
      default:
        throw new BadRequestException("Invalid Component Type!");
    }
  }
}

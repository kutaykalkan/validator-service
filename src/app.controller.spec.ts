import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Component } from './core/Component';
import { Resistor } from './core/Resistor';
import { Transistor } from './core/Transistor';
import { ValidateComponentResponse } from './dtos/ValidateComponentResponse';
import { ValidateComponentRequest } from './dtos/ValidateComponentRequest';
import { GenericValidationPipe } from './Validation/Pipes/GenericValidationPipe';
import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { isEnum, ValidationError } from 'class-validator';
import { Type } from 'class-transformer';
import { ConstraintMetadata } from 'class-validator/types/metadata/ConstraintMetadata';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, GenericValidationPipe],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('validate', () => {
    it('should return result object after successful validation', () => {
      var request: ValidateComponentRequest = <ValidateComponentRequest>{
        component:{
          type: "transistor",
          current_gain: 2.6,
          collector_emittor_voltage: 4.2,
          emitter_base_voltage: 6,
          collector_current: 3.6
        }
      };
      expect(appController.getValidation(request)).toStrictEqual(new Promise<Component>(() => <ValidateComponentRequest>{
        component:{
          type: "transistor",
          current_gain: 2.6,
          collector_emittor_voltage: 4.2,
          emitter_base_voltage: 6,
          collector_current: 3.6
        }}));
    });

    it('should throw bad request exception if component is not defined in request', async () => {
      var request: ValidateComponentRequest = <ValidateComponentRequest>{};

      try {
        await appController.getValidation(request);
      } catch (e) {
        expect(e).toStrictEqual(new BadRequestException("Component is not defined in request!"));
      }
    });

    it('should throw bad request exception if component is not valid', async () => {
      var request: ValidateComponentRequest = <ValidateComponentRequest>{
        component:{
          type: "NotAComponent",
          current_gain: 2.6,
          collector_emittor_voltage: 4.2,
          emitter_base_voltage: 6,
          collector_current: 3.6
        }
      };

      try {
        await appController.getValidation(request);
      } catch (e) {
        expect(e).toStrictEqual(new BadRequestException("Invalid Component Type!"));
      }
    });

    it('should throw bad request exception object with errors on invalid properties in request', async () => {
      var request: ValidateComponentRequest = <ValidateComponentRequest>{
        component:{
          type: "transistor",
          current_gain: 2.6,
          collector_emittor_voltage: 4.2,
          emitter_base_voltage: 6
        }
      };
      
      var errs:ValidationError[] = [
        <ValidationError>{
            property: "collector_current", 
            constraints: {
              "isDefined" : "collector_current should not be null or undefined",
              "isNumber" : "collector_current must be a number conforming to the specified constraints",
          }
        }
      ];

      try {
        await appController.getValidation(request);
      } catch (e) {
        expect(e).toStrictEqual(new BadRequestException(errs));
      }
    });
  });
});

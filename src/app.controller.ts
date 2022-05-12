import { BadRequestException, InternalServerErrorException, Body, Controller, Get, HttpException, HttpStatus, Post, ValidationError, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidateComponentRequest } from './dtos/ValidateComponentRequest';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('Validate')
  @HttpCode(200)
  async getValidation(@Body() request: ValidateComponentRequest): Promise<ValidateComponentRequest> {
    try{
      if(request.component === undefined)
        throw new BadRequestException("Component is not defined in request!");
      await this.appService.getComponentValidation(request.component);
    }catch(ex){
      if(Array.isArray(ex.response.message)){
        const formattedErrors = ex.response.message.map((o: ValidationError) => {
          return {[o.property] : o.constraints}
        })
        throw new BadRequestException(formattedErrors);
      }
      else if(ex instanceof BadRequestException){
        throw(ex);
      }
      else
        throw new InternalServerErrorException("An error occured with your request. Please try again later!");
    }
    return request;
  } 
}

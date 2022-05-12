import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenericValidationPipe } from './Validation/Pipes/GenericValidationPipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GenericValidationPipe],
})
export class AppModule {}

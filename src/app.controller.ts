import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHelloTest();
  }

  @Get('transporte')
  getTransport(): string {
    return 'Transporte nuevo';
  }
}

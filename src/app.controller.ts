import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/pipipi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/popopo')
  getHello(): string {
    return this.appService.getHello()
  }
}

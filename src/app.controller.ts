import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

class IsOddResponse {
  result: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/is-odd')
  async isOddHandler(@Query('number') number: string): Promise<IsOddResponse> {
    return { result: this.appService.getIsOdd(Number(number)) };
  }
}

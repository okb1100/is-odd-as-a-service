import { Controller, Get, Query } from '@nestjs/common';
import to from 'await-to-js';
import { AppService } from './app.service';

class IsOddResponse {
  result: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/is-odd')
  async isOddHandler(@Query('number') number: string): Promise<IsOddResponse> {
    // because why not
    const [err, isOdd] = await to(this.appService.getIsOdd(Number(number)));
    return { result: err ? false : isOdd };
  }
}

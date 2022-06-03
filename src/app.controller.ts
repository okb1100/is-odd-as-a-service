import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import wordsToNumbers from 'words-to-numbers';
class IsOddResponse {
  result: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/is-odd')
  async isOddHandler(@Query('number') num: string): Promise<IsOddResponse> {
    let number;
    number = Number(num);
    if (isNaN(number)) {
      number = Number(wordsToNumbers(num));
    }
    if (isNaN(number)) {
      number = 0;
    }
    const isOdd = await this.appService.getIsOdd(number);
    return { result: isOdd };
  }
}

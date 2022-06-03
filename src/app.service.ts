import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const isOdd = require('is-odd');

@Injectable()
export class AppService {
  async getIsOdd(number: number): Promise<boolean> {
    return isOdd(number);
  }
}

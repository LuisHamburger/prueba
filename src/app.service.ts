import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloTest(): string {
    return 'Hello World Test!';
  }
}

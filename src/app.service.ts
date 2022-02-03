import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate(data) {
    Logger.log('Log from app-service-micro');
    return (data || []).reduce((a, b) => a + b);
  }
  eventEmuted(data) {
    console.log('Micro app-service finally found');
    return data;
  }
}

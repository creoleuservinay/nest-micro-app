import { Controller, Get, Logger, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}
  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, object>) {
    console.log('Micro app- event found in controller');
    return this.appService.eventEmuted(data);
  }

  @MessagePattern('add')
  accumulate(data: number[]): number {
    this.logger.log('Additing in service');
    //return (data || []).reduce((a, b) => a + b);
    return this.appService.accumulate(data);
  }
}

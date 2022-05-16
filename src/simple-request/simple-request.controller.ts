import { Controller, Get, Param } from '@nestjs/common';
import { SimpleRequestItem } from 'src/simple-request-item';
import { SimpleRequestService } from './simple-request.service';

@Controller('simple-request')
export class SimpleRequestController {
  constructor(private simpleRequestService: SimpleRequestService) {}

  @Get(':user/:repo/:key')
  async findByKey(@Param() params): Promise<SimpleRequestItem[]> {
    return await this.simpleRequestService.findByKey(params);
  }
  @Get(':user/:repo/:key/:index')
  async findByKeyIndex(@Param() params): Promise<SimpleRequestItem[]> {
    return await this.simpleRequestService.findByKeyIndex(params);
  }
}

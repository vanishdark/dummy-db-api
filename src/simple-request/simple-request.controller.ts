import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ErrorBody } from '../erroBody.model';
import { SimpleRequestItem } from '../simple-request-item';
import { SimpleRequestService } from './simple-request.service';

@Controller('')
export class SimpleRequestController {
  constructor(private simpleRequestService: SimpleRequestService) {}

  @ApiParam({ name: 'key' })
  @ApiParam({ name: 'repo' })
  @ApiParam({ name: 'user' })
  @Get(':user/:repo/:key')
  async findByKey(@Param() params): Promise<SimpleRequestItem[] | string> {
    const r = await this.simpleRequestService.findByKey(params);
    if (r === 'error') {
      throw new HttpException(
        'Bad Request - Validate your params',
        HttpStatus.NOT_FOUND
      );
    }
    return r;
  }

  @ApiParam({ name: 'index' })
  @ApiParam({ name: 'key' })
  @ApiParam({ name: 'repo' })
  @ApiParam({ name: 'user' })
  @Get(':user/:repo/:key/:index')
  async findByKeyIndex(@Param() params): Promise<SimpleRequestItem[] | string> {
    const r = await this.simpleRequestService.findByKeyIndex(params);
    if (r === 'error') {
      throw new HttpException(
        'Bad Request - Validate your params',
        HttpStatus.BAD_REQUEST
      );
    }
    return r;
  }
}

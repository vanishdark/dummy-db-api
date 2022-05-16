import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SimpleRequestService } from './simple-request.service';
import { SimpleRequestController } from './simple-request.controller';

@Module({
  imports: [HttpModule],
  providers: [SimpleRequestService],
  controllers: [SimpleRequestController],
})
export class SimpleRequestModule {}

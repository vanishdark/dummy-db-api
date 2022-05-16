import { Module } from '@nestjs/common';
import { SimpleRequestModule } from './simple-request/simple-request.module';

@Module({
  imports: [SimpleRequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

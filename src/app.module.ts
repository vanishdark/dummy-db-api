import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SimpleRequestModule } from './simple-request/simple-request.module';

@Module({
  imports: [
    SimpleRequestModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 120,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class LoggingInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private readonly reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    const path: string = request.url;
    const method: string = request.method;
    const log = new Logger();
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        log.log(
          method + ':' + path + ` => completed after ${Date.now() - now}ms`,
          'HTTP Request'
        );
      })
    );
  }
}

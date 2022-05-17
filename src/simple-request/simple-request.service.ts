import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import e from 'express';
import { ErrorBody } from 'src/erroBody.model';
import { SimpleRequestItem } from '../simple-request-item';
@Injectable()
export class SimpleRequestService {
  constructor(private httpService: HttpService) {}

  async findByKey(params: any): Promise<SimpleRequestItem[] | string> {
    return new Promise<SimpleRequestItem[] | string>(async (resolve) => {
      const request = this.httpService.get(
        `https://raw.githubusercontent.com/${params.user}/${params.repo}/main/db.json`,
        {}
      );
      request.subscribe({
        next: (value) => {
          if (value.status === 200) {
            resolve(value.data[params.key]);
          }
        },
        error: () => {
          resolve('error');
        },
      });
    });
  }
  async findByKeyIndex(params: any): Promise<SimpleRequestItem[] | string> {
    return new Promise<SimpleRequestItem[] | string>(async (resolve) => {
      const request = this.httpService.get(
        `https://raw.githubusercontent.com/${params.user}/${params.repo}/main/db.json`,
        {}
      );
      request.subscribe({
        next: (value) => {
          if (value.status === 200) {
            if (value.status === 200) {
              resolve(value.data[params.key][params.index]);
            }
          }
        },
        error: () => {
          resolve('error');
        },
      });
    });
  }
}

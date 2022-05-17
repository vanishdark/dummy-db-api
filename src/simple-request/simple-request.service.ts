import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SimpleRequestItem } from '../simple-request-item';

@Injectable()
export class SimpleRequestService {
  constructor(private httpService: HttpService) {}

  async findByKey(params: any): Promise<SimpleRequestItem[]> {
    return new Promise<SimpleRequestItem[]>(async (resolve, reject) => {
      const request = await this.httpService.get(
        `https://raw.githubusercontent.com/${params.user}/${params.repo}/main/db.json`,
        {}
      );
      request.subscribe((response) => {
        if (response.status === 200) {
          resolve(response.data[params.key]);
        }
      });
    });
  }
  async findByKeyIndex(params: any): Promise<SimpleRequestItem[]> {
    return new Promise<SimpleRequestItem[]>(async (resolve, reject) => {
      const request = await this.httpService.get(
        `https://raw.githubusercontent.com/${params.user}/${params.repo}/main/db.json`,
        {}
      );
      request.subscribe((response) => {
        console.log(params.index);
        if (response.status === 200) {
          resolve(response.data[params.key][params.index]);
        }
      });
    });
  }
}

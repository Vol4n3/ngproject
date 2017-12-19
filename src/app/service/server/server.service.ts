import {Injectable} from '@angular/core';
import {Server} from '../../interface/Server';

@Injectable()
export class ServerService {

  constructor() {
  }

  static isSuccess(response: Server.Response.IResponse): boolean {
    return response.result === 'SUCCESS';
  }
}

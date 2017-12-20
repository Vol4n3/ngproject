import {Injectable} from '@angular/core';
import {Server} from '../../interface/Server';
import {environment} from '../../../environments/environment';

@Injectable()
export class ServerService {
  static uri = environment.serverAddress;

  constructor() {
  }

  static isSuccess(response: Server.Response.IResponse): boolean {
    return response.result === 'SUCCESS';
  }

  static makeRequestBody(action: Server.Request.RequestAction,
                         data: Server.Request.IData = {},
                         token: string = ''): Server.Request.IRequest {
    return {
      action: action,
      data: data,
      token: token,
    };
  }

  static getOptions(): Server.Request.IOptions {
    return {
      withCredentials: true
    };
  }
}

import {HttpParams} from '@angular/common/http/src/params';
import {HttpHeaders} from '@angular/common/http/src/headers';

export namespace Server {
  export namespace Request {
    export enum RequestAction {
      LOGIN = 'login',
      LOGOUT = 'logout',
      ISLOGGED = 'stilllogged'
    }

    export interface IOptions {
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }

    export interface IRequest {
      action: RequestAction;
      data?: IData;
      token?: string;
    }

    export interface IData {
      token?: string;
    }

    export interface ILogin extends IData {
      email: string;
      password: string;
    }
  }
  export namespace Response {
    export interface IResponse {
      data: any;
      result: string;
      time: string;
    }

    export interface IResponseUser extends IResponse {
      data: IUser;
    }

    export interface IUser {
      userkeyid: number;
      levelkeyid: number;
      levelname: string;
      level: number;
      lastname: string;
      firstname: string;
      email: string;
      phone: string;
      admin: number;
      active: number;
      production: number;
      token: string;
    }
  }
}

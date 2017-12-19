export namespace Server {
  export namespace Request {
    export enum RequestAction {
      LOGIN = 'login',
      LOGOUT = 'logout'
    }

    export interface IRequest {
      action: RequestAction;
      data?: IData;
      token?: string;
    }

    interface IData {
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

import {HttpParams} from '@angular/common/http/src/params';
import {HttpHeaders} from '@angular/common/http/src/headers';
import {Entity} from './Entity';

export namespace Server {
  export namespace Request {
    export enum RequestAction {
      LOGIN = 'login',
      LOGOUT = 'logout',
      ISLOGGED = 'stilllogged',
      GETPROJECTS = 'getprojects',
      GETPROJECT = 'getproject',
      EDITPROJECT = 'editproject',
      GETLISTLEVELS = 'getlistlevels'
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

    export interface IGetProjects extends IData {
      search?: string;
      first?: number;
      count?: number;
      levelkeyid?: number;
      includeinactive?: boolean;
    }
    export interface IGetProject extends IData {
      projectkeyid: number;
    }
    export interface IEditProject extends IData, Entity.IProject {
      analyseproject: boolean;
      clientkeyid: number;
      clients: Entity.IClient[];
      context: any[];
      inclino: Entity.IInclino[];
      installers: number[];
      liris: Entity.ILiris[];
      locations: number[];
      spcu: Entity.ISpcu[];
      strEndDate: string;
      strStartDate: string;
    }
  }
  export namespace Response {
    export interface IResponse {
      data: any;
      result: string;
      time: string;
    }

    export interface IResponseUser extends IResponse {
      data: Entity.IUser;
    }

    export interface IResponseLevels extends IResponse {
      data: Entity.ILevel[];
    }

    export interface IResponseProjects extends IResponse {
      data: IProjectsRecords;
    }
    export interface IResponseProject extends IResponse{
      data: Entity.IProject;
    }
    export interface IProjectsRecords {
      count: number;
      records: Entity.IProject[];
    }

  }
}

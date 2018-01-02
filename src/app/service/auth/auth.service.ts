import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Server} from '../../interface/Server';
import {ServerService} from '../server/server.service';
import {Entity} from '../../interface/Entity';
import {tr} from 'ngx-bootstrap';

@Injectable()
export class AuthService {

  private static pagesRequiredAuth: string[] = ['/home', '/projects'];
  private static pagesRequiredAdmin: string[] = [];
  public logged: boolean;

  constructor(private http: HttpClient) {
  }

  static isPageNeedAuth(page: string): boolean {
    return (AuthService.pagesRequiredAuth.indexOf(page) !== -1);
  }

  static isPageNeedAdmin(page: string): boolean {
    return (AuthService.pagesRequiredAdmin.indexOf(page) !== -1);
  }

  static getUser(): Entity.IUser {
    return <Entity.IUser> JSON.parse(localStorage.getItem('user_auth'));
  }

  private static setUser(user: Entity.IUser): void {
    localStorage.setItem('user_auth', JSON.stringify(user));
  }

  private static clearUser(): void {
    localStorage.removeItem('user_auth');
  }

  public getLevelsList(): Promise<Entity.ILevel[]> {
    return new Promise<Entity.ILevel[]>((resolve, reject) => {
      const req: Server.Request.IRequest = ServerService.makeRequestBody(
        Server.Request.RequestAction.GETLISTLEVELS,
        {},
        AuthService.getUser().token
      );
      this.http.post<Server.Response.IResponseLevels>(ServerService.uri, req, ServerService.getOptions())
        .subscribe((res: Server.Response.IResponseLevels) => {
          if (ServerService.isSuccess(res)) {
            const levelsForSelect: Entity.ILevel = {
              name: 'Niveau 0',
              levelkeyid: 1,
              parent: 0,
              active: 1,
              level: 0
            };
            res.data.unshift(levelsForSelect);
            resolve(res.data);
          } else {
            reject();
          }
        }, () => {
          reject();
        });
    });
  }


  public removeSession(): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: Server.Request.IRequest = ServerService.makeRequestBody(Server.Request.RequestAction.LOGOUT);
      this.http.post<Server.Response.IResponse>(ServerService.uri, req, ServerService.getOptions())
        .subscribe((res: Server.Response.IResponse) => {
          if (ServerService.isSuccess(res)) {
            this.logged = false;
            AuthService.clearUser();
            resolve();
          } else {
            reject();
          }
        }, () => {
          reject();
        });
    });
  }

  public isLogged(): Promise<any> {
    return new Promise((resolve, reject) => {
      const data: Server.Request.IData = {
        token: AuthService.getUser().token
      };
      if (!data) {
        reject();
        return;
      }
      const req: Server.Request.IRequest = ServerService.makeRequestBody(Server.Request.RequestAction.ISLOGGED, data, data.token);
      this.http.post<Server.Response.IResponse>(ServerService.uri, req, ServerService.getOptions())
        .subscribe((res) => {
          if (ServerService.isSuccess(res)) {
            this.logged = true;
            resolve();
          } else {
            AuthService.clearUser();
            reject();
          }
        }, () => {
          AuthService.clearUser();
          reject();
        });
    });
  }

  public connect(loginData?: Server.Request.ILogin): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: Server.Request.IRequest = ServerService.makeRequestBody(Server.Request.RequestAction.LOGIN, loginData);
      this.http.post<Server.Response.IResponseUser>(ServerService.uri, req, ServerService.getOptions())
        .subscribe((res) => {
          if (ServerService.isSuccess(res)) {
            this.logged = true;
            AuthService.setUser(res.data);
            resolve();
          } else {
            reject();
          }
        }, () => {
          reject();
        });
    });
  }

}

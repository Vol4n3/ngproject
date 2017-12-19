import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Server} from '../../interface/Server';
import {ServerService} from '../server/server.service';


@Injectable()
export class AuthService {
  private uri = environment.serverAddress;

  constructor(private http: HttpClient) {
  }

  static getUser(): Server.Response.IUser {
    return <Server.Response.IUser> JSON.parse(localStorage.getItem('user_auth'));
  }

  private static setUser(user: Server.Response.IUser): void {
    localStorage.setItem('user_auth', JSON.stringify(user));
  }

  private static clearUser(): void {
    localStorage.removeItem('user_auth');
  }

  public logout() {
    return new Promise((resolve, reject) => {
      this.http.post<Server.Response.IResponse>(this.uri, null).subscribe((res) => {
        if (ServerService.isSuccess(res)) {
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

  public login(loginData?: Server.Request.ILogin) {
    const req: Server.Request.IRequest = {
      action: Server.Request.RequestAction.LOGIN,
      data: loginData,
      token: '',
    };
    return new Promise((resolve, reject) => {
      this.http.post<Server.Response.IResponseUser>(this.uri, req).subscribe((res) => {
      if (ServerService.isSuccess(res)) {
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

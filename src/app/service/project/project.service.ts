import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Server} from '../../interface/Server';
import {ServerService} from '../server/server.service';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  public getProjectsList(data: Server.Request.IGetProjects = {}): Promise<Server.Response.IProjectsRecords> {

    return new Promise<Server.Response.IProjectsRecords>(((resolve, reject) => {
      const req: Server.Request.IRequest = ServerService.makeRequestBody(
        Server.Request.RequestAction.GETPROJECTS,
        data,
        AuthService.getUser().token);
      this.http.post<Server.Response.IResponseProjects>(ServerService.uri, req, ServerService.getOptions())
        .subscribe((res: Server.Response.IResponseProjects) => {

          if (ServerService.isSuccess(res)) {
            resolve(res.data);
          } else {
            reject();
          }
        }, () => {
          reject();
        });
    }));
  }

}

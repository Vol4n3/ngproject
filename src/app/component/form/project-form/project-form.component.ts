import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ProjectService} from '../../../service/project/project.service';
import {Entity} from '../../../interface/Entity';
import IProject = Entity.IProject;

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit, OnChanges {
  @Input('projectId') private projectId: number;
  @Output('success') private success: EventEmitter<any> = new EventEmitter();
  @Output('error') private error: EventEmitter<any> = new EventEmitter();

  public project: IProject;

  constructor(private projectService: ProjectService) {

  }

  editProject(form: HTMLFormElement): boolean {
    console.log(form);
    this.success.emit();
    return false;
  }

  cancel(): void {
    this.error.emit();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.projectService.getProject({projectkeyid: this.projectId}).then((res) => {
      this.project = res;
      this.project.datestart = res.datestart.slice(0, 10);
      this.project.dateend = res.dateend.slice(0, 10);
    }).catch(() => {

    });
  }

}

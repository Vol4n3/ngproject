import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {

    this.projectService.getProjectsList({
      count: 5,
      first: 0,
      includeinactive: true,
      levelkeyid: 13
    }).then((res) => {
      console.log(res);
    }).catch(() => {

    });
  }

}

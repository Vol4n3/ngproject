import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../service/project/project.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Server} from '../../interface/Server';
import {MainDialogComponent} from '../../dialog/main-dialog/main-dialog.component';
import {Entity} from '../../interface/Entity';
import {AuthService} from '../../service/auth/auth.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


}

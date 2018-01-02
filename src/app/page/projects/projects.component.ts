import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../service/project/project.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Server} from '../../interface/Server';
import {MainDialogComponent} from '../../dialog/main-dialog/main-dialog.component';
import {Entity} from '../../interface/Entity';
import {AuthService} from '../../service/auth/auth.service';

interface IProjectGridColumns {
  id: number;
  code: string;
  name: string;
  place: string;
  start: string;
  end: string;
  country: string;
  city: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['code', 'name', 'place', 'start', 'end', 'details'];
  dataSource = new MatTableDataSource<IProjectGridColumns>();
  public includeInactive = false;
  public selectedLevel: number;
  public levels: Entity.ILevel[];
  public emptyArray = Array;

  constructor(private projectService: ProjectService, public dialog: MatDialog, private auth: AuthService) {
    auth.getLevelsList().then((res) => {
      this.levels = res;
      this.selectedLevel = (AuthService.getUser().level === 0) ? 1 : AuthService.getUser().level;
      this.fillTable();
    }).catch(() => {

    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buildDataSource(projects: Entity.IProject[]): void {
    const data: IProjectGridColumns[] = [];
    for (const project of projects) {
      const columns: IProjectGridColumns = {
        id: project.projectkeyid,
        code: project.code,
        name: project.name,
        place: project.address1,
        start: project.datestart.slice(0, 10),
        end: project.dateend.slice(0, 10),
        country: project.country,
        city: project.city
      };
      data.push(columns);
    }
    this.dataSource.data = data;
  }

  editProject(project: IProjectGridColumns) {
    const dialogRef = this.dialog.open(MainDialogComponent, {
      data: {type: 'project', projectId: project.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  fillTable(): void {
    this.projectService.getProjectsList({
      includeinactive: this.includeInactive,
      levelkeyid: this.selectedLevel
    }).then((res: Server.Response.IProjectsRecords) => {
      this.buildDataSource(res.records);

    }).catch(() => {

    });
  }

  ngOnInit() {

  }

}

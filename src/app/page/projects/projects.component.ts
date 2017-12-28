import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../service/project/project.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Server} from '../../interface/Server';
import {MainDialogComponent} from '../../dialog/main-dialog/main-dialog.component';

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

  constructor(private projectService: ProjectService, public dialog: MatDialog) {

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

  buildDataSource(projects: Server.Response.IProject[]): void {
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
      width: '250px',
      data: { type: "project", projectId: project.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {

    this.projectService.getProjectsList({
      includeinactive: true,
      levelkeyid: 1
    }).then((res: Server.Response.IProjectsRecords) => {
      this.buildDataSource(res.records);

    }).catch(() => {

    });
  }

}

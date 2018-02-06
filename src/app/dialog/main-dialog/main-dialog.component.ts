import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../service/project/project.service';


@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.scss'],
  providers: [ProjectService]
})
export class MainDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    console.log('close');
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

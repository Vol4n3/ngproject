import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface IDialogData {
  type: string;
}

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.scss']
})
export class MainDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IDialogData) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

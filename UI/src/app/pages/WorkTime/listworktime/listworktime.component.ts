import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { worktime } from 'src/app/models/worktime.model';
import { WorktimeService } from 'src/app/services/worktime/worktime.service';
import { shift } from 'src/app/models/shift.model';

@Component({
  selector: 'app-listworktime',
  templateUrl: './listworktime.component.html',
  styleUrls: ['./listworktime.component.css']
})
export class ListworktimeComponent implements OnInit {
  dataSource!: MatTableDataSource<worktime>;

  empworks: worktime[] = [];
  colums: string[] = ["Shift", "FromDate", "ToDate", "actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private empWorkService: WorktimeService,
    private snackBar: MatSnackBarComponent, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListOfempwork();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getListOfempwork() {
    this.empWorkService.GetAllEmpWork().subscribe((res: any) => {
      this.empworks = res;
      this.dataSource = new MatTableDataSource(this.empworks);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  delete(element: any) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, you want to remove an Employee: ' + element.EmpName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.empWorkService.DeleteEmpWork(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfempwork();
        });
      }
    });
  }
  addOrEditempwork(id: number) {
    this.router.navigate(['/defaultPage/addOrEditworktime', id])

  }

}

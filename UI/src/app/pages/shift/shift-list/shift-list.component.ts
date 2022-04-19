import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ActivatedRoute, Router } from '@angular/router';
import { shift } from 'src/app/models/shift.model';
import { ShiftService } from 'src/app/services/shift/shift.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;
  dataSource!: MatTableDataSource<shift>;
  shifts: shift[] = [];
  colums: string[] = ["Id", "Enname", "Arname", "actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private shiftService: ShiftService,
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog,
    private activateRout:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getListOfshift();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getListOfshift() {
    this.shiftService.getShiftUrl().subscribe((res: any) => {

      this.shifts = res;
      this.dataSource = new MatTableDataSource(this.shifts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditshift(id: number) {
    this.router.navigate(['/defaultPage/addOrEditshift', id])
  }
  Delete(element: any) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Shift',
        message: 'Are you sure, you want to remove an Shift: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.shiftService.deleteShift(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfshift();
        });
      }
    });

  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department/department.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  


  dataSource!: MatTableDataSource<department>;
  departmentes: department[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private departmentService:DepartmentService,
    private router:Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.getListOfDepartments();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfDepartments() {
    this.departmentService.getDepartmentUrl().subscribe((res: any) => {
      console.log(res)
      this.departmentes = res;
    this.dataSource = new MatTableDataSource(this.departmentes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditdepartment(id:number)
  {
  this.router.navigate(['/defaultPage/addOrEditdepartment',id]);
  }
  delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Department',
        message: 'Are you sure, you want to remove an Department: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.departmentService.deleteDepartment(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfDepartments();
        });
      }
    }); 
   
  }

}

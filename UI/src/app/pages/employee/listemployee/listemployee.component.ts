import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import { bus } from 'src/app/models/bus.model';
import { employee } from 'src/app/models/employee.model';
import { BusService } from 'src/app/services/bus/bus.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';


@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;

  dataSource!: MatTableDataSource<employee>;

  employees: employee[]=[];

  colums: string[] = ["EmpName","EmpCode", "Birth","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private employeeService:EmployeeService,
     private snackBar:MatSnackBarComponent,private router:Router, private dialog: MatDialog,
     private activateRout:ActivatedRoute) {
  

  }

  ngOnInit(): void {
    this.getListOfemployees();
    
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
  }
  view(id:number,button:boolean)
  {
    this.router.navigate(['/defaultPage/addOrEditemployee/'+id+'/'+button])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      console.log('res',res)
      this.employees = res;
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
  }

  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, you want to remove an Employee: ' + element.EmpName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.employeeService.deleteEmployee(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfemployees();
        });
      }
    });  

  
  }
  addOrEditemployee(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditemployee',id])

  }

}

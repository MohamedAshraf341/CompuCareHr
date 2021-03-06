import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import {transaction} from 'src/app/models/transactions';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
@Component({
  selector: 'app-listpermissions',
  templateUrl: './listpermissions.component.html',
  styleUrls: ['./listpermissions.component.css']
})
export class ListpermissionsComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;
  employees: employee[]=[];
  dataSource!: MatTableDataSource<transaction>;
  transactions: transaction[] = [];
  colums: string[] = ["Empcode", "Empname", "Type", "actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(
    private employeeService:EmployeeService,
    private transactionService: TransactionService,
    private router: Router,
    private snackBar: MatSnackBarComponent,
     private dialog: MatDialog,
     private activateRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.getListOfholiday();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getListOfholiday() {
    this.transactionService.getallpermissions().subscribe((res: any) => {

      this.transactions = res;
      this.dataSource = new MatTableDataSource(this.transactions);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addtransactions(id: number) {
    this.router.navigate(['/defaultPage/addtransactionpermission', id])
  }
  view(id:number,button:boolean)
  {
    this.router.navigate(['/defaultPage/addtransactionpermission/'+id+'/'+button])
  }
  Delete(element: any) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Shift',
        message: 'Are you sure, you want to remove an transaction: ' + element.EmpCode
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.transactionService.deleteTransaction(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfholiday();
        });
      }
    });

  }

}

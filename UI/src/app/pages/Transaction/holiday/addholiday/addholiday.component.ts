import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employee } from 'src/app/models/employee.model';
import { leavesType } from 'src/app/models/leavesType.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LeavesTypesService } from 'src/app/services/leavesTypes/leaves-types.service';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
@Component({
  selector: 'app-addholiday',
  templateUrl: './addholiday.component.html',
  styleUrls: ['./addholiday.component.css']
})
export class AddholidayComponent implements OnInit {

  transactionForm:FormGroup;
  UserCode!:number;
  TransacrtionCode!:number;
  employees: employee[]=[];
  leavesTypes: leavesType[] = [];
  constructor(private employeeService:EmployeeService,
    private _formBuilder:FormBuilder,
    private LeavesTypesService: LeavesTypesService,
    private transactionServices:TransactionService,private snackBar:MatSnackBarComponent,
    private router:Router,
    private datePipe: DatePipe) {
    this.transactionForm = this._formBuilder.group({
      UserCode:[,[]],
      EmpCode: ['', []],
      From:['',[Validators.required]],
      To:['',[Validators.required]],
      TransacrtionCode:[3,[]],
      Note:['',[]],
      LeaveId:['',[]],
      Value:['',[]]
    
    });
   }

  ngOnInit(): void {
    this.UserCode = JSON.parse(localStorage.getItem('UserId') as any) ;
    console.log('this.UserCode ',this.UserCode );
    this.getListOfemployees();
    this.getListOfleavesTypes();
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getListOfleavesTypes() {
    this.LeavesTypesService.getLeavesTypes().subscribe((res: any) => {
      this.leavesTypes = res;
    });
  }
  addTransaction(){
    this.transactionForm.value.From=this.datePipe.transform(this.transactionForm.value.From, 'yyyy-MM-dd');
    this.transactionForm.value.To=this.datePipe.transform(this.transactionForm.value.To, 'yyyy-MM-dd');
    console.log('this.transactionForm.value',this.transactionForm.value);
    this.transactionForm.value.UserCode=this.UserCode

    
    this.transactionServices.addTransaction(this.transactionForm.value).subscribe((res: any) => {
      console.log('addd',res)
      if (res != null) {
        this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
        this.router.navigate(['/defaultPage/home'])
      }
      else {
        this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

      }

    });
  }
  clear()
  {
    this.transactionForm.reset();
  }

}

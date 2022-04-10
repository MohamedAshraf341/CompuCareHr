import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  transactionForm: FormGroup;
  UserCode!: number;
  TransacrtionCode!: number;
  transactionid: any;
  holidayArr: any = [];
  employees: employee[] = [];
  leavesTypes: leavesType[] = [];
  constructor(private employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    private LeavesTypesService: LeavesTypesService,
    private transactionServices: TransactionService,
    private snackBar: MatSnackBarComponent,
    private router: Router,
    private activateRout: ActivatedRoute,
    private datePipe: DatePipe) {
    this.transactionForm = this._formBuilder.group({
      UserCode: [, []],
      EmpCode: [this.holidayArr.EmpCode, []],
      From: [this.holidayArr.From, [Validators.required]],
      To: [this.holidayArr.To, [Validators.required]],
      TransacrtionCode: ["1", []],
      Note: [this.holidayArr.Note, []],
      LeaveId: [this.holidayArr.LeaveId, []],
      Value: [this.holidayArr.Value, []]
    });
  }

  get EmpCode() {
    return this.transactionForm.get('EmpCode');
  }
  get From() {
    return this.transactionForm.get('From');
  }
  get To() {
    return this.transactionForm.get('To');
  }
  get Note() {
    return this.transactionForm.get('Note');
  }
  get LeaveId() {
    return this.transactionForm.get('LeaveId');
  }
  get Value() {
    return this.transactionForm.get('Value');
  }
  ngOnInit(): void {
    this.UserCode = JSON.parse(localStorage.getItem('UserId') as any);
    this.transactionid = this.activateRout.snapshot.paramMap.get('id');
    console.log('id', this.transactionid)
    if (this.transactionid != 0) {
      this.transactionServices.gettransactionbyiud(this.transactionid).subscribe((res: any) => {
        console.log(res)
        this.holidayArr = res
        this.holidayArr.Value = res.Value

      })
    }
    this.getListOfemployees();
    this.getListOfleavesTypes();
  }
  changeStop(Stop: any) {
    console.log('asmaa', Stop.value);
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getListOfleavesTypes() {
    this.LeavesTypesService.getLeavesholiday().subscribe((res: any) => {
      this.leavesTypes = res;
    });
  }

  addorEditTransaction() {
    this.transactionForm.value.From = this.datePipe.transform(this.transactionForm.value.From, 'yyyy-MM-dd');
    this.transactionForm.value.To = this.datePipe.transform(this.transactionForm.value.To, 'yyyy-MM-dd');
    console.log('this.transactionForm.value', this.transactionForm.value);
    this.transactionForm.value.UserCode = this.UserCode
    let form = JSON.stringify(this.transactionForm.value);

    if (this.transactionid == 0) {
      this.transactionServices.addTransaction(this.transactionForm.value).subscribe((res: any) => {
        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.router.navigate(['/defaultPage/listtransactionholiday'])
        }
        else {
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
        }
      });
    }
    else {
      this.transactionServices.updateTransaction(this.transactionid, this.transactionForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
        this.router.navigate(['/defaultPage/listtransactionholiday'])
      });
    }
  }
  clear() {
    this.transactionForm.reset();
  }

}

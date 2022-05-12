import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { employee } from 'src/app/models/employee.model';
import { leavesType } from 'src/app/models/leavesType.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LeavesTypesService } from 'src/app/services/leavesTypes/leaves-types.service';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
@Component({
  selector: 'app-add-or-editerrand',
  templateUrl: './add-or-editerrand.component.html',
  styleUrls: ['./add-or-editerrand.component.scss']
})
export class AddOrEditerrandComponent implements OnInit {
  public modelCustom1: NgbDateStruct;
  public modelCustom: NgbDateStruct;
  alert:boolean=false;
  transactions!: any;
  transactionForm:FormGroup;
  transactionId:any;
  button:any;
  employees: employee[] = [];
  leavesTypes: leavesType[] = [];
  constructor(private location: Location,
    private LeavesTypesService: LeavesTypesService,
    private transactionServices: TransactionService,
    private employeeService: EmployeeService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
  ngOnInit(): void {
    this.transactionId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.transactionId>0)
    {

      this.transactionServices.gettransactionbyiud(this.transactionId).subscribe((res:any)=>{
        this.transactions = res;
        this.transactions.From = { day: Number(res.From.toString().substring(8, 10)), month: Number(res.From.toString().substring(5, 7)), year: Number(res.From.toString().substring(0, 4)) };
        this.transactions.To = { day: Number(res.To.toString().substring(8, 10)), month: Number(res.To.toString().substring(5, 7)), year: Number(res.To.toString().substring(0, 4)) };

      })
    }
    this.getListOfemployees();
    this.getListOfleavesTypes();
    this.transactionForm = new FormGroup({
      UserCode: new FormControl('1'),
      EmpCode: new FormControl(),
      From: new FormControl('', [Validators.required]),
      To: new FormControl('', Validators.required),
      TransacrtionCode: new FormControl('1'),
      Note: new FormControl(),
      LeaveId: new FormControl(),
      Value: new FormControl(),
    });
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getListOfleavesTypes() {
    this.LeavesTypesService.getLeaveserrand().subscribe((res: any) => {
      this.leavesTypes = res;
    });
  }
  get f(){
    return this.transactionForm.controls;
  }
  SubmitAdd(){
    this.transactionForm.value.From = this.returndate(this.modelCustom1.year, this.modelCustom1.month, this.modelCustom1.day);
    this.transactionForm.value.To = this.returndate(this.modelCustom.year, this.modelCustom.month, this.modelCustom.day);

    console.log(this.transactionForm.value);
    this.transactionServices.addTransaction( this.transactionForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    this.transactionForm.value.From = this.returndate(this.transactions.From.year, this.transactions.From.month, this.transactions.From.day);
    this.transactionForm.value.To = this.returndate(this.transactions.To.year, this.transactions.To.month, this.transactions.To.day);
    console.log(this.transactionForm.value);
    this.transactionServices.updateTransaction( this.transactionId,this.transactionForm.value).subscribe((res:any) => {
         console.log('company Updated successfully!');
         this.location.back();
    })
  }
  Backtolist()
  {
    this.location.back();
  }
  clear()
  {
    this.transactionForm.reset();
    this.alert=false;

  }
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  public isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
  result: any;
  returndate(year: number, month: number, day: number) {

    if (month < 10) {
      this.result = year.toString() + "-" + "0" + month.toString();
    }
    else {
      this.result = year.toString() + "-" + month.toString();
    }

    if (day < 10) {
      this.result = this.result + "-" + "0" + day.toString();

    }
    else {
      this.result = this.result + "-" + day.toString();

    }

    return this.result;
  }
}

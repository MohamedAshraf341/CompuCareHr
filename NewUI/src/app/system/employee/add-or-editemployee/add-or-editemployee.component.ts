import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { company } from 'src/app/models/company.model';
import { cost } from 'src/app/models/cost.model';
import { department } from 'src/app/models/department.model';
import { job } from 'src/app/models/job.model';
import { BusService } from 'src/app/services/bus/bus.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { CostService } from 'src/app/services/cost/cost.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { JobService } from 'src/app/services/job/job.service';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-or-editemployee',
  templateUrl: './add-or-editemployee.component.html',
  styleUrls: ['./add-or-editemployee.component.scss']
})
export class AddOrEditemployeeComponent implements OnInit {
  public modelCustom: NgbDateStruct;

  costs:cost[]=[];
  departments:department[]=[];
  jobs:job[]=[];
  companies:company[]=[];
  empid:any;
  empArr!:any;
  employeeForm:FormGroup;
  button:boolean;
  alert:boolean=false;

  constructor(
    private location: Location,
    private CostSerives:CostService,
    private departmentService:DepartmentService,
    private jobService:JobService,
    private employeeService:EmployeeService,
    private companyService:CompanyService,
    private activateRout:ActivatedRoute,
  ) { 

  }
  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.empid = this.activateRout.snapshot.paramMap.get('id');
    console.log('id', this.empid)
    if (this.empid != 0) {
      this.employeeService.getEmployeeIdUrl(this.empid).subscribe((res: any) => {
        console.log(res)
        this.empArr = res
      })
    }
    this.getdropdownCost();
    this.getdropdownDepartment();
    this.getdropdownJob();
    this.getdropdownCompany();
    this.employeeForm=new FormGroup({
      EmpName:new FormControl('', [Validators.required]) ,
      EmpCode:new FormControl('', [Validators.required]) ,
      Birth:new FormControl('', [Validators.required]) ,
      Job:new FormControl('', [Validators.required]) ,
      Comp:new FormControl('', [Validators.required]) ,
      Hiring:new FormControl('', [Validators.required]) ,
      CardId:new FormControl('', [Validators.required]) ,
      Cost:new FormControl('', [Validators.required]) ,
      Dep:new FormControl('', [Validators.required]) ,
      Note:new FormControl('', [Validators.required]) ,
      Add:new FormControl('', [Validators.required]) ,
      Quli:new FormControl('', [Validators.required]) ,
      Hourv:new FormControl() ,
      Isover:new FormControl() ,
      Stop:new FormControl(),
      IS5:new FormControl() ,
      IS5Work:new FormControl() 

    });
  }
  // get dropdown cost
  getdropdownCost() {
    this.CostSerives.getCostUrl().subscribe((res: any) => {
   this.costs = res;
    });
  }
    // get dropdown department
    getdropdownDepartment() {
      this.departmentService.getDepartmentUrl().subscribe((res: any) => {
     this.departments = res;
      });
    }
    // get dropdown job
    getdropdownJob() {
      this.jobService.getJobUrl().subscribe((res: any) => {

     this.jobs = res;
      });
    }
 
    // get dropdown company
    getdropdownCompany()
    {
      this.companyService.getCompanyUrl().subscribe((res: any) => {
        this.companies = res;
         });
    }

  get f(){
    return this.employeeForm.controls;
  }
  submitAdd()
  {
    console.log(this.employeeForm.value);
    this.employeeService.addemployee( this.employeeForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;});
  }
  submitEdit()
  {
    console.log(this.employeeForm.value);
    this.employeeService.editDepartment( this.empid,this.employeeForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;});
  }
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  public isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
  Backtolist()
  {
    this.location.back();
  }
  clear()
  {
    this.employeeForm.reset();
    this.alert=false;

  } 
}

import { ContentObserver } from '@angular/cdk/observers';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-edit-employee',
  templateUrl: './add-or-edit-employee.component.html',
  styleUrls: ['./add-or-edit-employee.component.css']
})
export class AddOrEditEmployeeComponent implements OnInit {
  costs:cost[]=[];
  departments:department[]=[];
  jobs:job[]=[];
  companies:company[]=[];
  empid:any;
  empArr:any=[];
  employeeForm:FormGroup;
  button:boolean;


  constructor(private location: Location, private busService:BusService,
    private CostSerives:CostService,
    private departmentService:DepartmentService,
    private jobService:JobService,
 private employeeService:EmployeeService,
    private companyService:CompanyService,
    private activateRout:ActivatedRoute,
    private _formBuilder:FormBuilder,
    private snackBar:MatSnackBarComponent,
    private route:Router,
    private http:HttpClient,
    private datePipe: DatePipe
) 
{
  this.employeeForm = this._formBuilder.group({
    EmpName: [this.empArr.EmpName, [Validators.required]],
    EmpCode: [this.empArr.EmpCode, []],
    Birth:[this.empArr.Birth,[]],
    Job:[this.empArr.Job,[Validators.required]],
    Comp:[this.empArr.Comp,[Validators.required]],
    Hiring:[this.empArr.Hiring,[]],
    CardId:[this.empArr.CardId,[Validators.required]],
    Cost:[this.empArr.Cost,[Validators.required]],
    Dep:[this.empArr.Dep,[Validators.required]],
    note:[this.empArr.note,[]],
    Add:[this.empArr.Add,[]],
    Quli:[this.empArr.Quli,[]],
    Hourv:[this.empArr.Hourv,[]],
    Isover:[this.empArr.Isover,[]],
    Stop:[this.empArr.Stop,[]],
    IS5:[this.empArr.IS5,[]],
    IS5Work:[this.empArr.IS5Work,[]]
  });
 }

 get EmpName() {
  return this.employeeForm.get('EmpName');
} 
get EmpCode() {
  return this.employeeForm.get('EmpCode');
}  get Birth() {
  return this.employeeForm.get('Birth');
}  get Job() {
  return this.employeeForm.get('Job');
}  get Comp() {
  return this.employeeForm.get('Comp');
}  get Hiring() {
  return this.employeeForm.get('Hiring');
}  get CardId() {
  return this.employeeForm.get('CardId');
}  get Cost() {
  return this.employeeForm.get('Cost');
}  get Dep() {
  return this.employeeForm.get('Dep');
}  get note() {
  return this.employeeForm.get('note');
}  get Add() {
  return this.employeeForm.get('Add');
}  get Quli() {
  return this.employeeForm.get('Quli');
}  get Hourv() {
  return this.employeeForm.get('Hourv');
}  get Isover() {
  return this.employeeForm.get('Isover');
}  get Stop() {
  return this.employeeForm.get('Stop');
}  get IS5() {
  return this.employeeForm.get('IS5');
}  get IS5Work() {
  return this.employeeForm.get('IS5Work');
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



  }
  changeStop(Stop:any)
  {
    console.log('asmaa',Stop.value);
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

    createOrEditemployee()
  {
       
    if(this.employeeForm.get('Stop')?.value==undefined)
  {
    this.employeeForm.patchValue({
      Stop: false,
    });
  }
  if(this.employeeForm.get('IS5')?.value==undefined)
  {
    this.employeeForm.patchValue({
      IS5: false,
    });
  }
  if(this.employeeForm.get('IS5Work')?.value==undefined)
  {
    this.employeeForm.patchValue({
      IS5Work: false,
    });
  }
  if(this.employeeForm.get('Isover')?.value==undefined)
  {
    this.employeeForm.patchValue({
      Isover: false,
    });
  }
  if(this.employeeForm.get('Hourv')?.value==undefined)
  {
    this.employeeForm.patchValue({
      Hourv: 0,
    });
  }
  this.employeeForm.value.Hiring=this.datePipe.transform(this.employeeForm.value.Hiring, 'yyyy-MM-dd');
  this.employeeForm.value.Birth=this.datePipe.transform(this.employeeForm.value.Birth, 'yyyy-MM-dd');

   console.log('this.employeeForm.value',this.employeeForm.value);
   Object.keys(this.employeeForm.value).forEach((k) => {
     if(this.employeeForm.value[k]==undefined)
     {
      this.employeeForm.value[k]=null
     }
  })
  console.log('this.employeeForm2',this.employeeForm.value);

  const formData = new FormData();
    Object.keys(this.employeeForm.value).forEach((k) => {
      formData.append(k, this.employeeForm.value[k])
    })
    console.log('formData',formData);
    formData.forEach((value,key) => {
      console.log(key+" "+value)
     
    });
 
    if (this.empid == 0) {
    this.http.post(
      `${environment.apiUrl}EmpDatas`,formData,  { responseType: 'text' }
     ).subscribe((res: any) => {
        if(res!=null)
        {
          this.snackBar.openSnackBar(res, 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/employeelist'])
          this.location.back()
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
          
        }
        });
    }
    else{     
      this.http.put(
        `${environment.apiUrl}EmpDatas/${this.empid}`,formData, { responseType: 'text' }
       ).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/employeelist'])
          this.location.back()
        });
    }     
  }
  clear()
  {
    this.employeeForm.reset();
  }
  Backtolist()
  {
    this.location.back()
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { employee } from 'src/app/models/employee.model';
import { leave } from 'src/app/models/Leave.model';
import { reportdepartment } from 'src/app/models/reportdepartment.model';
import { reporttimetable } from 'src/app/models/reportname.model';
import { reportname } from 'src/app/models/reporttimetable.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ReportService } from 'src/app/services/report/report.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  searchForm:FormGroup;
  employees: employee[]=[];
  reportnames: reportname[]=[];
  userid!:number;
  reportid!: number;
  reportdepartments:reportdepartment[]=[];
  reporttimetables:reporttimetable[]=[];
  Leaves:leave[]=[];
  queryString:any;
  constructor(private employeeService:EmployeeService,
     private reportService:ReportService,
     private _formBuilder:FormBuilder,
     private datePipe: DatePipe,
     private snackBar:MatSnackBarComponent,) { 
    this.searchForm = this._formBuilder.group({
      femp: ['', []],
      temp: ['', []],
      fdate:['',[Validators.required]],
      tdate:['',[Validators.required]],
      filter3:['',[]],
      filter:['',[]],
      filter2:['',[]],
    
    });
  }

  ngOnInit(): void {
    this.userid = JSON.parse(localStorage.getItem('UserId') as any) ;
    this.getListOfemployees();
    this.getReportNames();
    this.getReportDepartments();
    this.getReportTimeTables();
    this.getLeaves();

  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getReportNames() {
    this.reportService.getReportName().subscribe((res: any) => {
      this.reportnames = res;
    });
  }
  getReportDepartments() {
    this.reportService.getReportDepartment().subscribe((res: any) => {
      this.reportdepartments = res;
    });
  }
  getReportTimeTables() {
    this.reportService.getReportTimeTable().subscribe((res: any) => {
      this.reporttimetables = res;
    });
  }
  
  getLeaves() {
    this.reportService.getLeaves().subscribe((res: any) => {
      console.log(res)
      this.Leaves = res;
    });
  }
  doSomething(deviceValue:any) {
    this.reportid=deviceValue.value;
}
  searchReport()
  {
if(this.reportid)
{
  this.searchForm.value.fdate=this.datePipe.transform(this.searchForm.value.fdate, 'yyyy-MM-dd');
    this.searchForm.value.tdate=this.datePipe.transform(this.searchForm.value.tdate, 'yyyy-MM-dd');
    Object.keys(this.searchForm.value).forEach((k) => {
      if(this.searchForm.value[k]=="")
      {
       this.searchForm.value[k]=null
      }
   })
    let params = new URLSearchParams();
   for(let key in this.searchForm.value){
    params.set(key, this.searchForm.value[key]) 
    }
    this.queryString = params.toString();
    this.queryString =  decodeURIComponent(this.queryString)

     this.reportService.filterReport(this.userid,this.reportid, this.queryString ).subscribe((res: any) => {
 
    
    });
}
else{
  this.snackBar.openSnackBar('Report Name is Required', 'Close', 'red-snackbar');
}
  
  }
  clear()
  {
    this.searchForm.reset();

  }

}

import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import { leave } from 'src/app/models/Leave.model';
import { reportdepartment } from 'src/app/models/reportdepartment.model';
import { reporttimetable } from 'src/app/models/reportname.model';
import { reportname } from 'src/app/models/reporttimetable.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ReportService } from 'src/app/services/report/report.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public modelCustom: NgbDateStruct;
  public modelCustom1: NgbDateStruct;
  searchForm: FormGroup;
  employees: employee[] = [];
  reportnames: reportname[] = [];
  userid!: number;
  reportid!: number;
  reportdepartments: reportdepartment[] = [];
  reporttimetables: reporttimetable[] = [];
  Leaves: leave[] = [];
  queryString: any;

  constructor(private employeeService: EmployeeService,
    private reportService: ReportService) {
  }

  ngOnInit(): void {
    this.getListOfemployees();
    this.getReportNames();
    this.getReportDepartments();
    this.getReportTimeTables();
    this.getLeaves();
    this.searchForm = new FormGroup({
      femp: new FormControl(),
      temp: new FormControl(),
      fdate: new FormControl('', [Validators.required]),
      tdate: new FormControl('', Validators.required),
      filter3: new FormControl(),
      filter: new FormControl(),
      filter2: new FormControl(),
    });
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
  searchReport() {
    if (this.reportid) {
      Object.keys(this.searchForm.value).forEach((k) => {
        if (this.searchForm.value[k] == "") {
          this.searchForm.value[k] = null
        }
      })
      let params = new URLSearchParams();
      for (let key in this.searchForm.value) {
        params.set(key, this.searchForm.value[key])
      }
      this.queryString = params.toString();
      this.queryString = decodeURIComponent(this.queryString)
      this.reportService.filterReport(this.userid, this.reportid, this.queryString).subscribe((res: any) => {
      });
    }

  }
  get f(){
    return this.searchForm.controls;
  }
  clear() {
    this.searchForm.reset();

  }
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  public isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

}

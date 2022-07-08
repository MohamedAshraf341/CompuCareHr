import { Component, OnInit } from '@angular/core';
import express, { Request, Response } from 'express';
import { Location } from '@angular/common';
import { shift } from 'src/app/models/shift.model';
import { ShiftService } from 'src/app/services/shift/shift.service';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { timeTableD } from 'src/app/models/timeTableD'
import { WorkscheduleService } from 'src/app/services/workschedules/workschedule.service';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-work-schedules',
  templateUrl: './work-schedules.component.html',
  styleUrls: ['./work-schedules.component.scss']
})
export class WorkSchedulesComponent implements OnInit {
  tableHForm = this.fb.group({
    isdayoff: new FormControl(),
    ShiftCode: new FormControl(),
  });

  workschedulesForm = this.fb.group({
    Name: new FormControl(),
    TimePeriod: new FormControl(),
    StartDate: new FormControl(),
    Morning: new FormControl(),
    Shift: new FormControl(),
    Driver: new FormControl(),
    shiftdriver: new FormControl(),

    tableH: this.fb.array([])
  })
  get tableH() {

    return this.workschedulesForm.get("tableH") as FormArray
  }
  workschedules: timeTableD[] = [];
  nextdays: string[] = [];
  shifts: shift[] = [];
  values: number = 1;
  Alert: boolean = false;
  public modelCustom: NgbDate;
  constructor(private WorkscheduleServices: WorkscheduleService,
    private location: Location,
    private shiftServices: ShiftService,
    private calendar: NgbCalendar, private fb: FormBuilder) {
  }

  // onKey(event: any) {
  //   // this.values +=parseInt(event.target.value) ;
  //   // event.stopPropagation();
  //   this.workschedules.length=event.target.value;

  // }
  addNewtableH() {
    this.tableH.push(this.tableHForm);
    this.incrementvalue();
    this.nextday(this.values);
    this.workschedules.length = this.values;
  }
  removetableH(lessonIndex: number) {
    // this.tableH.removeAt(lessonIndex);
    this.decrementvalue();
    this.nextday(this.values);
    this.workschedules.length = this.values;
  }
  incrementvalue() {
    if (this.values >= 1) {
      return ++this.values;
    }


  }
  decrementvalue() {
    if (this.values > 1) {
      return --this.values;
    }
    else {
      this.Alert = true;
      return this.values = 1;
    }
  }

  ngOnInit(): void {
    this.getListOfshift();
    this.selectToday();
    this.tableH.push(this.tableHForm);
    this.nextday(1);
    this.workschedules.length=1;

  }
  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Satarday',
    7: 'Sunday'
  }
  submitsave() {
    if(this.workschedulesForm.value.isdayoff === null)
    {
      this.workschedulesForm.value.isdayoff =false;
    }
    this.workschedulesForm.value.StartDate = this.returndate(this.model.year, this.model.month, this.model.day);
    console.log("mohamed");
    console.log(this.workschedulesForm.value);
    // this.WorkscheduleServices.addWorkschedule(this.workschedules).subscribe((res:any) => {
    //   console.log('successfully!');
    // })
    // console.log(this.workschedules);
  }

  selectedDay: string = '';
  set model(val) {
    this.modelCustom = val;
    this.selectedDay = this.weekDays[this.calendar.getWeekday(this.model)]
  }
  get model() {
    return this.modelCustom;
  }
  selectToday() {
    this.model = this.calendar.getToday();
    this.selectedDay = this.weekDays[this.calendar.getWeekday(this.model)]
    console.log(this.selectedDay);
  }
  nextday(num: number) {
    this.nextdays.push(this.selectedDay);
    this.model = this.calendar.getNext(this.model);
    this.selectedDay = this.weekDays[this.calendar.getWeekday(this.model)]
    // console.log( this.selectedDay);
    if (num > 1) {
      return this.nextday(num - 1);
    }
  }
  getnextday() {
    this.nextday(this.nextdays.length);
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
  Backtolist() {
    this.location.back();
  }
  getListOfshift() {
    this.shiftServices.getShiftUrl().subscribe((res: any) => {
      this.shifts = res;
    });
  }
  public isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
}

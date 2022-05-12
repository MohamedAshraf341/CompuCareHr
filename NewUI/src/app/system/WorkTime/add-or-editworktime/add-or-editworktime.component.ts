import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmpWorkModel } from 'src/app/models/empWorkModel';
import { WorktimeService } from 'src/app/services/worktime/worktime.service';
import { ShiftService } from 'src/app/services/shift/shift.service';
import { shift } from 'src/app/models/shift.model';
@Component({
  selector: 'app-add-or-editworktime',
  templateUrl: './add-or-editworktime.component.html',
  styleUrls: ['./add-or-editworktime.component.scss']
})
export class AddOrEditworktimeComponent implements OnInit {
  public modelCustom1: NgbDateStruct;
  public modelCustom: NgbDateStruct;
  alert: boolean = false;
  shifts: shift[] = [];
  worktimes!: any;
  worktimeForm: FormGroup;
  worktimeId: any;
  button: any;
  constructor(private location: Location,
    public worktimeservices: WorktimeService,
    private ShiftService: ShiftService,
    private router: Router,
    private activateRout: ActivatedRoute,) { }
  ngOnInit(): void {
    
    this.worktimeId = this.activateRout.snapshot.paramMap.get('id');
    this.button = this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if (this.worktimeId > 0) {
      this.worktimeservices.GetEmpWorkById(this.worktimeId).subscribe((res: any) => {
        this.worktimes = res;
        this.worktimes.FromDate = { day: Number(res.FromDate.toString().substring(8, 10)), month: Number(res.FromDate.toString().substring(5, 7)), year: Number(res.FromDate.toString().substring(0, 4)) };
        this.worktimes.ToDate = { day: Number(res.ToDate.toString().substring(8, 10)), month: Number(res.ToDate.toString().substring(5, 7)), year: Number(res.ToDate.toString().substring(0, 4)) };
        this.worktimes.StartSign={ hour: Number(res.StartSign.toString().substring(0,2)), minute: Number(res.StartSign.toString().substring(3,5))}
        this.worktimes.EndSign={ hour: Number(res.EndSign.toString().substring(0,2)), minute: Number(res.EndSign.toString().substring(3,5))}
        this.worktimes.StartShift={ hour: Number(res.StartShift.toString().substring(0,2)), minute: Number(res.StartShift.toString().substring(3,5))}
        this.worktimes.EndShift={ hour: Number(res.EndShift.toString().substring(0,2)), minute: Number(res.EndShift.toString().substring(3,5))}
        this.worktimes.OverTimeStart={ hour: Number(res.OverTimeStart.toString().substring(0,2)), minute: Number(res.OverTimeStart.toString().substring(3,5))}
        this.worktimes.EarlyPermission={ hour: Number(res.EarlyPermission.toString().substring(0,2)), minute: Number(res.EarlyPermission.toString().substring(3,5))}
        this.worktimes.LatePermission={ hour: Number(res.LatePermission.toString().substring(0,2)), minute: Number(res.LatePermission.toString().substring(3,5))}

        console.log(res);
      })

    }
    this.worktimeForm = new FormGroup({
      FromDate: new FormControl('', [Validators.required]),
      ToDate: new FormControl('', Validators.required),
      StartSign: new FormControl('', [Validators.required]),
      EndSign: new FormControl('', Validators.required),
      StartShift: new FormControl('', [Validators.required]),
      EndShift: new FormControl('', Validators.required),
      EarlyPermission: new FormControl('', [Validators.required]),
      LatePermission: new FormControl('', Validators.required),
      IsHour: new FormControl(),
      IsDayOff: new FormControl(),
      OverTimeStart: new FormControl(),
      ShiftId: new FormControl(),
    });
    this.getdropdownshift();
  }
  // get dropdown Shift
  getdropdownshift() {
    this.ShiftService.getShiftUrl().subscribe((res: any) => {
      this.shifts = res;
    });
  }
  get f() {
    return this.worktimeForm.controls;
  }
  SubmitAdd() {
    this.worktimeForm.value.FromDate = this.returndate(this.modelCustom1.year, this.modelCustom1.month, this.modelCustom1.day);
    this.worktimeForm.value.ToDate = this.returndate(this.modelCustom.year, this.modelCustom.month, this.modelCustom.day);
    this.worktimeForm.value.StartSign = this.returntime(this.time1.hour, this.time1.minute);
    this.worktimeForm.value.EndSign = this.returntime(this.time2.hour, this.time2.minute);
    this.worktimeForm.value.OverTimeStart = this.returntime(this.time3.hour, this.time3.minute);
    this.worktimeForm.value.StartShift = this.returntime(this.time4.hour, this.time4.minute);
    this.worktimeForm.value.EndShift = this.returntime(this.time5.hour, this.time5.minute);
    this.worktimeForm.value.EarlyPermission = this.returntime(this.time6.hour, this.time6.minute);
    this.worktimeForm.value.LatePermission = this.returntime(this.time7.hour, this.time7.minute);

    console.log(this.worktimeForm.value);
    this.worktimeservices.postNewEmpWork(this.worktimeForm.value).subscribe((res: any) => {
      console.log('company Added successfully!');
      this.alert = true;
      //  this.location.back();
    })
  }
  SubmitEdit() {
    this.worktimeForm.value.FromDate = this.returndate(this.worktimes.FromDate.year, this.worktimes.FromDate.month, this.worktimes.FromDate.day);
    this.worktimeForm.value.ToDate = this.returndate(this.worktimes.ToDate.year, this.worktimes.ToDate.month, this.worktimes.ToDate.day);
    this.worktimeForm.value.StartSign = this.returntime(this.worktimes.StartSign.hour, this.worktimes.StartSign.minute);
    this.worktimeForm.value.EndSign = this.returntime(this.worktimes.EndSign.hour, this.worktimes.EndSign.minute);
    this.worktimeForm.value.OverTimeStart = this.returntime(this.worktimes.OverTimeStart.hour, this.worktimes.OverTimeStart.minute);
    this.worktimeForm.value.StartShift = this.returntime(this.worktimes.StartShift.hour, this.worktimes.StartShift.minute);
    this.worktimeForm.value.EndShift = this.returntime(this.worktimes.EndShift.hour,this.worktimes.EndShift.minute);
    this.worktimeForm.value.EarlyPermission = this.returntime(this.worktimes.EarlyPermission.hour, this.worktimes.EarlyPermission.minute);
    this.worktimeForm.value.LatePermission = this.returntime(this.worktimes.LatePermission.hour,this.worktimes.LatePermission.minute);
    console.log(this.worktimeForm.value);
    this.worktimeservices.UpdateEmpWork(this.worktimeId, this.worktimeForm.value).subscribe((res: any) => {
      console.log('company Updated successfully!');
      this.location.back();
    })
  }
  Backtolist() {
    this.location.back();
  }
  clear() {
    this.worktimeForm.reset();
    this.alert = false;

  }
  //Basic timepicker
  public time1 = { hour: 0, minute: 0};
  public time2 = { hour: 0, minute: 0};
  public time3 = { hour: 0, minute: 0 };
  public time4 = { hour: 0, minute: 0};
  public time5 = { hour: 0, minute: 0};
  public time6 = { hour: 0, minute: 0};
  public time7 = { hour: 0, minute: 0};
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  public isDisabled(date: NgbDateStruct, current: { month: number }) {
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
  returntime(hour:number,minut:number)
  {
    if (hour < 10) {
      this.result = "0" + hour.toString();
    }
    else {
      this.result = hour.toString();
    }
    if (minut < 10) {
      this.result = this.result + ":" + "0" + minut.toString();

    }
    else {
      this.result = this.result + ":" + minut.toString();

    }
    return this.result;
  }
}

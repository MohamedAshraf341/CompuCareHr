import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
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
  alert:boolean=false;
  shifts:shift[]=[];
  worktimes!: any;
  worktimeForm:FormGroup;
  worktimeId:any;
  button:any;
  constructor(private location: Location,
    public worktimeservices:WorktimeService,
    private ShiftService :ShiftService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
  ngOnInit(): void {
    this.worktimeId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.worktimeId>0)
    {
      this.worktimeservices.GetEmpWorkById(this.worktimeId).subscribe((res:any)=>{
        this.worktimes = res;
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
      isHour: new FormControl(),
      isDayOff: new FormControl(),
      OverTimeStart: new FormControl(),
      ShiftId: new FormControl( ),
    });
    this.getdropdownshift();
  }
      // get dropdown Shift
      getdropdownshift() {
        this.ShiftService.getShiftUrl().subscribe((res: any) => {
       this.shifts = res;
        });
      }
  get f(){
    return this.worktimeForm.controls;
  }
  SubmitAdd(){
    this.worktimeForm.value.FromDate = this.returndate(this.modelCustom1.year, this.modelCustom1.month, this.modelCustom1.day);
    this.worktimeForm.value.ToDate = this.returndate(this.modelCustom.year, this.modelCustom.month, this.modelCustom.day);

    console.log(this.worktimeForm.value);
    this.worktimeservices.postNewEmpWork( this.worktimeForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
        this.worktimeForm.value.FromDate = this.returndate(this.worktimes.FromDate.year, this.worktimes.FromDate.month, this.worktimes.FromDate.day);
    this.worktimeForm.value.ToDate = this.returndate(this.worktimes.ToDate.year, this.worktimes.ToDate.month, this.worktimes.ToDate.day);
    console.log(this.worktimeForm.value);
    this.worktimeservices.UpdateEmpWork( this.worktimeId,this.worktimeForm.value).subscribe((res:any) => {
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
    this.worktimeForm.reset();
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

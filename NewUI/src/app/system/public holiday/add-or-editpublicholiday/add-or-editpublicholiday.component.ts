import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { publicHoliday } from 'src/app/models/publicholiday.model';
import { PublicHolidayService } from 'src/app/services/publicHoliday/public-holiday.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { analyzeAndValidateNgModules, analyzeFileForInjectables } from '@angular/compiler';


@Component({
  selector: 'app-add-or-editpublicholiday',
  templateUrl: './add-or-editpublicholiday.component.html',
  styleUrls: ['./add-or-editpublicholiday.component.scss']
})
export class AddOrEditpublicholidayComponent implements OnInit {
  alert:boolean=false;
  publicholidays!: any;
  publicholidayForm:FormGroup;
  publicholidayId:any;
  button:any;
   //Datepicker in a popup
   public modelPopup: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-3};
    //Disabled datepicker
    public modelDisabled: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
    public disabled = true;
  constructor(private location: Location,
    public publicholidayservices:PublicHolidayService,
    private router: Router,
    private activateRout:ActivatedRoute,
    ) { }
    public modelCustom: NgbDateStruct;
    public modelCustom1: NgbDateStruct;

  ngOnInit(): void {
    this.publicholidayId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.publicholidayId>0)
    {
      this.publicholidayservices.getPublicHolidayIdUrl(this.publicholidayId).subscribe((res:publicHoliday)=>{
        this.publicholidays = res;
        this.publicholidays.Fdate={ day: Number(res.Fdate.toString().substring(8,10)) ,month: Number(res.Fdate.toString().substring(5,7)), year: Number( res.Fdate.toString().substring(0,4)) };
        this.publicholidays.Tdate={ day: Number(res.Tdate.toString().substring(8,10)) ,month: Number(res.Tdate.toString().substring(5,7)), year: Number( res.Tdate.toString().substring(0,4)) };
      });

    }
    this.publicholidayForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', ),
      Fdate: new FormControl('', Validators.required),
      Tdate: new FormControl('', Validators.required),

    });
  }
  get f(){
    return this.publicholidayForm.controls;
  }
  SubmitAdd(){
    console.log(this.publicholidayForm.value);
    
    this.publicholidayForm.value.Fdate=this.returndate(this.modelCustom1.year,this.modelCustom1.month,this.modelCustom1.day);
    this.publicholidayForm.value.Tdate=this.returndate(this.modelCustom.year,this.modelCustom.month,this.modelCustom.day);
    
    this.publicholidayservices.addPublicHoliday( this.publicholidayForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  result:any;
  returndate(year:number,month:number,day:number){
   
    if (month<10)
    this.result=year.toString()+"-"+ "0"+month.toString();
    else
    this.result=year.toString()+"-"+month.toString();

      if (day<10)
       this.result= this.result+"-"+"0"+day.toString();
       else
       this.result= this.result+"-"+day.toString();

       return this.result;
  }
  SubmitEdit(){
    console.log(this.publicholidayForm.value);
   
    this.publicholidayForm.value.Fdate=this.returndate(this.publicholidays.Fdate.year,this.publicholidays.Fdate.month,this.publicholidays.Fdate.day);
    this.publicholidayForm.value.Tdate=this.returndate(this.publicholidays.Tdate.year,this.publicholidays.Tdate.month,this.publicholidays.Tdate.day);
    this.publicholidayservices.editPublicHoliday( this.publicholidayId,this.publicholidayForm.value).subscribe((res:any) => {
         console.log('company Updated successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }

  Backtolist()
  {
    this.location.back();
  }
  clear()
  {
    this.publicholidayForm.reset();
    this.alert=false;

  }
  public isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  public isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
}

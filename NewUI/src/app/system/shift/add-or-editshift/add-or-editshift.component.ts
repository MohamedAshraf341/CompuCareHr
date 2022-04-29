import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { shift } from 'src/app/models/shift.model';
import { ShiftService } from 'src/app/services/shift/shift.service';
@Component({
  selector: 'app-add-or-editshift',
  templateUrl: './add-or-editshift.component.html',
  styleUrls: ['./add-or-editshift.component.scss']
})
export class AddOrEditshiftComponent implements OnInit {
  alert:boolean=false;
  shifts!: shift;
  shiftForm:FormGroup;
  shiftId:any;
  button:any;
  constructor(private location: Location,
    public shiftservices:ShiftService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.shiftId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.shiftId>0)
    {
      this.shiftservices.getShiftIdUrl(this.shiftId).subscribe((res:shift)=>{
        this.shifts = res;
      })

    }
    this.shiftForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.shiftForm.controls;
  }
  SubmitAdd(){
    console.log(this.shiftForm.value);
    this.shiftservices.addShift( this.shiftForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.shiftForm.value);
    this.shiftservices.editShift( this.shiftId,this.shiftForm.value).subscribe((res:any) => {
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
    this.shiftForm.reset();
    this.alert=false;

  }
}

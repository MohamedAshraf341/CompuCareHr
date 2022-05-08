import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { jobLevel } from 'src/app/models/jobLevel.model';
import { JobLevelService } from 'src/app/services/jobLevel/job-level.service';
@Component({
  selector: 'app-add-or-editjoblevel',
  templateUrl: './add-or-editjoblevel.component.html',
  styleUrls: ['./add-or-editjoblevel.component.scss']
})
export class AddOrEditjoblevelComponent implements OnInit {
  alert:boolean=false;
  joblevels!: jobLevel;
  joblevelForm:FormGroup;
  joblevelId:any;
  button:any;
  constructor(private location: Location,
    public joblevelservices:JobLevelService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.joblevelId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.joblevelId>0)
    {
      this.joblevelservices.getJobLevelIdUrl(this.joblevelId).subscribe((res:jobLevel)=>{
        this.joblevels = res;
      })

    }
    this.joblevelForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.joblevelForm.controls;
  }
  SubmitAdd(){
    console.log(this.joblevelForm.value);
    this.joblevelservices.addJobLevel( this.joblevelForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.joblevelForm.value);
    this.joblevelservices.editJobLevel( this.joblevelId,this.joblevelForm.value).subscribe((res:any) => {
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
    this.joblevelForm.reset();
    this.alert=false;

  }

}

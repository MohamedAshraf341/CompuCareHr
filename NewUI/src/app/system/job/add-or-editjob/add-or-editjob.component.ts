import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job/job.service';
@Component({
  selector: 'app-add-or-editjob',
  templateUrl: './add-or-editjob.component.html',
  styleUrls: ['./add-or-editjob.component.scss']
})
export class AddOrEditjobComponent implements OnInit {
  alert:boolean=false;
  jobs!: job;
  jobForm:FormGroup;
  jobId:any;
  button:any;
  constructor(private location: Location,
    public jobservices:JobService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.jobId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.jobId>0)
    {
      this.jobservices.getJobIdUrl(this.jobId).subscribe((res:job)=>{
        this.jobs = res;
      })

    }
    this.jobForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.jobForm.controls;
  }
  SubmitAdd(){
    console.log(this.jobForm.value);
    this.jobservices.addJob( this.jobForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.jobForm.value);
    this.jobservices.editJob( this.jobId,this.jobForm.value).subscribe((res:any) => {
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
    this.jobForm.reset();
    this.alert=false;

  }
}

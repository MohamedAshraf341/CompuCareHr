import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-or-editjob',
  templateUrl: './add-or-editjob.component.html',
  styleUrls: ['./add-or-editjob.component.css']
})
export class AddOrEditjobComponent implements OnInit {
  button:boolean;
  jobForm!:FormGroup;
  jobId:any;
  jobArr:any=[];
  constructor(private location: Location,private _formBuilder:FormBuilder,
              private jobService:JobService,
     
            private route:Router,private activateRout: ActivatedRoute,
            private snackBar: MatSnackBarComponent) {
    this.jobForm = this._formBuilder.group({
      Arname: [this.jobArr.Arname, [Validators.required]],
      Enname: [this.jobArr.Enname, [Validators.required]],
   
    });
   }
   get Arname() {
    return this.jobForm.get('Arname');
  } 
  get Enname() {
    return this.jobForm.get('Enname');
  } 
  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.jobId = this.activateRout.snapshot.paramMap.get('id');
    if (this.jobId != 0) {
      this.jobService.getJobIdUrl(this.jobId).subscribe((res: any) => {
        this.jobArr = res
      })
    }
  }
  createOrEditjob()
  {
    if (this.jobId == 0) {
      this.jobService.addJob(this.jobForm.value).subscribe((res: any) => {
        if(res!=null)
        {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/joblist'])
          this.location.back()
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
        }
        
        });
    }
    else{
      this.jobService.editJob(this.jobId,this.jobForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/joblist'])
          this.location.back()
        
        });
    }
  
   
  }
  Backtolist()
  {
    this.location.back()
  }
  clear()
  {
    this.jobForm.reset();
  }


}


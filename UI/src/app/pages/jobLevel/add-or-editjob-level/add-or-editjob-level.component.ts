import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobLevelService } from 'src/app/services/jobLevel/job-level.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-editjob-level',
  templateUrl: './add-or-editjob-level.component.html',
  styleUrls: ['./add-or-editjob-level.component.css']
})
export class AddOrEditjobLevelComponent implements OnInit {

  button:boolean;
  jobLevelForm!:FormGroup;
  jobLevelId:any;
  jobLevelArr:any=[];
  constructor(private location: Location,private _formBuilder:FormBuilder,
              private jobLevelService:JobLevelService,
            private route:Router,
            private activateRout: ActivatedRoute,
            private snackBar: MatSnackBarComponent) {
    this.jobLevelForm = this._formBuilder.group({
      Arname: [this.jobLevelArr.Arname, [Validators.required]],
      Enname: [this.jobLevelArr.Enname, [Validators.required]],
   
    });
   }
   get Arname() {
    return this.jobLevelForm.get('Arname');
  } 
  get Enname() {
    return this.jobLevelForm.get('Enname');
  } 
  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.jobLevelId = this.activateRout.snapshot.paramMap.get('id');
    if (this.jobLevelId != 0) {
      this.jobLevelService.getJobLevelIdUrl(this.jobLevelId).subscribe((res: any) => {
        this.jobLevelArr = res
      })
    }
  }
  createOrEditjobLevel()
  {
    if (this.jobLevelId == 0) {
      this.jobLevelService.addJobLevel(this.jobLevelForm.value).subscribe((res: any) => {
        if(res!=null)
        {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/joblevellist'])
          this.location.back()
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
        }
        
        });
    }
    else{
      this.jobLevelService.editJobLevel(this.jobLevelId,this.jobLevelForm.value).subscribe((res: any) => {
     
          this.snackBar.openSnackBar('sucessfully edited ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/joblevellist'])
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
    this.jobLevelForm.reset();
  }

}

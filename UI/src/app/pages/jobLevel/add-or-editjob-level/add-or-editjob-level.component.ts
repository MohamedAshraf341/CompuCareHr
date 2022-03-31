import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobLevelService } from 'src/app/services/jobLevel/job-level.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-editjob-level',
  templateUrl: './add-or-editjob-level.component.html',
  styleUrls: ['./add-or-editjob-level.component.css']
})
export class AddOrEditjobLevelComponent implements OnInit {

 
  jobLevelForm!:FormGroup;
  jobLevelId:any;
  jobLevelArr:any=[];
  constructor(private _formBuilder:FormBuilder,
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
          this.route.navigate(['/defaultPage/joblevellist'])
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
        }
        
        });
    }
    else{
      this.jobLevelService.editJobLevel(this.jobLevelId,this.jobLevelForm.value).subscribe((res: any) => {
     
          this.snackBar.openSnackBar('sucessfully edited ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/joblevellist'])
       
        
        });
    }
    
   
  }
  clear()
  {
    this.jobLevelForm.reset();
  }

}

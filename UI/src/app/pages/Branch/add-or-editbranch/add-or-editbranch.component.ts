import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch/branch.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-editbranch',
  templateUrl: './add-or-editbranch.component.html',
  styleUrls: ['./add-or-editbranch.component.css']
})
export class AddOrEditbranchComponent implements OnInit {

 
  branchId:any;
  branchArr:any=[];
  branchForm:FormGroup;
  constructor(private _formBuilder:FormBuilder,
              private branchService:BranchService,
            private route:Router,
            private activateRout:ActivatedRoute,
            private snackBar: MatSnackBarComponent) {
    this.branchForm = this._formBuilder.group({
      Arname: [this.branchArr.Arname, [Validators.required]],
      Enname: [this.branchArr.Enname, [Validators.required]],
   
    });
   }
   get Arname() {
    return this.branchForm.get('Arname');
  } 
  get Enname() {
    return this.branchForm.get('Enname');
  } 
  ngOnInit(): void {
    this.branchId=this.activateRout.snapshot.paramMap.get('id');
    if(this.branchId!=0)
    {
      this.branchService.getBranchesIdUrl(this.branchId).subscribe((res:any)=>{
       this.branchArr=res
      })

     
    }
  }
  createOrEditBranch()
  {
    if(this.branchId==0)
    {
      this.branchService.addBranch(this.branchForm.value).subscribe((res: any) => {
   
        if(res!=null)
        {
      this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/branchlist'])
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
    
        }
        
        });
    }
    else
    {
      this.branchService.editBranch(this.branchId,this.branchForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/branchlist'])
       
        });

    }
   
   
  }
  clear()
  {
    this.branchForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch/branch.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { usersystempage } from 'src/app/models/usersystempage';
import { Location } from '@angular/common';




@Component({
  selector: 'app-add-or-editbranch',
  templateUrl: './add-or-editbranch.component.html',
  styleUrls: ['./add-or-editbranch.component.css']
})
export class AddOrEditbranchComponent implements OnInit {
  button:boolean;
  New :boolean;
  edit :boolean;
  delete :boolean;
  userpage: usersystempage;
  branchId:any;
  branchArr:any=[];
  branchForm:FormGroup;
  constructor(private location: Location,
    private Permission: PermissionService,
    private _formBuilder:FormBuilder,
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
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.branchId=this.activateRout.snapshot.paramMap.get('id');
    if(this.branchId!=0)
    {
      this.branchService.getBranchesIdUrl(this.branchId).subscribe((res:any)=>{
       this.branchArr=res
      })

     
    }
    this.getpagepermission();
  }
  getpagepermission() {


    this.Permission.getuserpermissionbypageid(87,2).subscribe((res: any) => {
      this.userpage = res;
      console.log(res);
      
       
    });
  }
  createOrEditBranch()
  {
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
    if(this.branchId==0)
    {
      this.branchService.addBranch(this.branchForm.value).subscribe((res: any) => {
   
        if(res!=null)
        {
      this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/branchlist'+'/'+this.New+'/'+this.edit+'/'+this.delete])
          this.location.back()
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
        // this.route.navigate(['/defaultPage/branchlist'+'/'+this.New+'/'+this.edit+'/'+this.delete])
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
    this.branchForm.reset();
  }
}

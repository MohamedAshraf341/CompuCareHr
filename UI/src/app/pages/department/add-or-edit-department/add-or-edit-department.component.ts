import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department/department.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-edit-department',
  templateUrl: './add-or-edit-department.component.html',
  styleUrls: ['./add-or-edit-department.component.css']
})
export class AddOrEditDepartmentComponent implements OnInit {

 
 departmentForm!:FormGroup;
 departmentId:any;
 departmentArr:any=[];
constructor(private _formBuilder:FormBuilder,
            private departmentService:DepartmentService,
          private route:Router,
          private activateRoute:ActivatedRoute,
          private snackBar: MatSnackBarComponent) {
  this.departmentForm = this._formBuilder.group({
    Arname: [this.departmentArr.Arname, [Validators.required]],
    Enname:[this.departmentArr.Enname, [Validators.required]],
 
  });
 }
 get Arname() {
  return this.departmentForm.get('Arname');
} 
get Enname() {
  return this.departmentForm.get('Enname');
} 
ngOnInit(): void {
  this.departmentId=this.activateRoute.snapshot.paramMap.get('id');
  console.log(this.activateRoute.snapshot.paramMap)
    if(this.departmentId!=0)
    {
      this.departmentService.getDepartmentIdUrl(this.departmentId).subscribe((res:any)=>{
       this.departmentArr=res
      })

     
    }
}
createOrEditDepartment()
{
  if(this.departmentId==0)
    {
  this.departmentService.addDepartment(this.departmentForm.value).subscribe((res: any) => {
  if(res!=null)
  {
    this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
    this.route.navigate(['/defaultPage/departmentlist'])
  }
  else{
    this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

  }
  
  });
 
}
else{
  this.departmentService.editDepartment(this.departmentId,this.departmentForm.value).subscribe((res: any) => {
    this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
      this.route.navigate(['/defaultPage/departmentlist'])
   
    });
}
}

clear()
{
  this.departmentForm.reset();
}
}

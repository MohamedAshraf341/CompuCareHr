import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';


import { CompanyService } from 'src/app/services/company/company.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent implements OnInit {
  button:boolean;
  companyId:any;
  companyArr:any=[];
  companyForm:FormGroup;
  constructor(private location: Location,
    private _formBuilder:FormBuilder,
              private companyService:CompanyService,
            private route:Router,
            private activateRout:ActivatedRoute,
            private snackBar: MatSnackBarComponent,
            private datePipe: DatePipe,
            private http:HttpClient,

            ) {
    this.companyForm = this._formBuilder.group({
      Arname: [this.companyArr.Arname, [Validators.required]],
      Enname: [this.companyArr.Enname, [Validators.required]],
       Owner: [this.companyArr.Owner, [Validators.required]],
   
       City: [this.companyArr.City, [Validators.required]],
       Insno: [this.companyArr.Insno, [Validators.required]],
       Add: [this.companyArr.Add, [Validators.required]],
       Twon: [this.companyArr.Twon, [Validators.required]],
       Law: [this.companyArr.Law, [Validators.required]],

   
       office: [this.companyArr.office, [Validators.required]],
       Person: [this.companyArr.Person, [Validators.required]],
       Date: [this.companyArr.Date, [Validators.required]],
       PerJob: [this.companyArr.PerJob, [Validators.required]],

       isActive:[this.companyArr.isActive,[]]

    });
   }
   get PerJob() {
    return this.companyForm.get('PerJob');
  } 
  get Date() {
    return this.companyForm.get('Date');
  } 
  get Person() {
    return this.companyForm.get('Person');
  } 
  get office() {
    return this.companyForm.get('office');
  } 

   get Insno() {
    return this.companyForm.get('Insno');
  } 
  get Add() {
    return this.companyForm.get('Add');
  } 
  get Twon() {
    return this.companyForm.get('Twon');
  } 
  get Law() {
    return this.companyForm.get('Law');
  } 

   get Arname() {
    return this.companyForm.get('Arname');
  } 
  get Enname() {
    return this.companyForm.get('Enname');
  } 
  get Owner() {
    return this.companyForm.get('Owner');
  } 
  get City() {
    return this.companyForm.get('City');
  } 
  get isActive() {
    return this.companyForm.get('isActive');
  } 

   ngOnInit(): void {
    this.companyId=this.activateRout.snapshot.paramMap.get('id');
    if(this.companyId!=0)
    {
      this.companyService.getCompanyIdUrl(this.companyId).subscribe((res:any)=>{
       this.companyArr=res
      })

    }
  }
  createOrEditCompany()
  {
    this.companyForm.value.Date=this.datePipe.transform(this.companyForm.value.Date, 'yyyy-MM-dd');
    if(this.companyForm.get('isActive')?.value==undefined)
    {
      this.companyForm.patchValue({
        isActive: false,
      });
    }
    this.companyForm.value.isActive=false;
    if(this.companyId==0)
    {
      this.companyService.addCompany(this.companyForm.value).subscribe((res: any) => {
   
        if(res!=null)
        {
      this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/companylist'])
          this.location.back()

        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
    
        }
        
        });
    }
    else
    {
      this.companyService.editCompany(this.companyId,this.companyForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/companylist'])
          this.location.back()
       
        });

    }
  //   console.log('this.companyForm.value',this.companyForm.value);
  //   Object.keys(this.companyForm.value).forEach((k) => {
  //     if(this.companyForm.value[k]==undefined)
  //     {
  //      this.companyForm.value[k]=null
  //     }
  //  })
  //  console.log('this.companyForm2',this.companyForm.value);
 
  //  const formData = new FormData();
  //    Object.keys(this.companyForm.value).forEach((k) => {
  //      formData.append(k, this.companyForm.value[k])
  //    })
  //    console.log('formData',formData);
  //    formData.forEach((value,key) => {
  //      console.log(key+" "+value)
      
  //    });
  
  //    if (this.companyId == 0) {
  //    this.http.post(
  //      `${environment.apiUrl}Attcomp/AddComany`,formData,  { responseType: 'text' }
  //     ).subscribe((res: any) => {
  //        if(res!=null)
  //        {
  //          this.snackBar.openSnackBar(res, 'Close', 'green-snackbar');
  //          this.route.navigate(['/defaultPage/companylist'])
  //        }
  //        else{
  //          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
  //        }
  //        });
  //    }
  //    else{
 
      
  //      this.http.put(
  //        `${environment.apiUrl}Attcomp/PutCompany/${this.companyId}`,formData, { responseType: 'text' }
  //       ).subscribe((res: any) => {
  //        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
  //          this.route.navigate(['/defaultPage/companylist'])
  //        });
  //    }
   
  }
  Backtolist()
  {
    this.location.back()
  }
  clear()
  {
    this.companyForm.reset();
  }
}

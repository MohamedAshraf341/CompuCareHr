import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicHolidayService } from 'src/app/services/publicHoliday/public-holiday.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-edit-public-holiday',
  templateUrl: './add-or-edit-public-holiday.component.html',
  styleUrls: ['./add-or-edit-public-holiday.component.css']
})
export class AddOrEditPublicHolidayComponent implements OnInit {
  button:boolean;
  PublicHolidayForm!:FormGroup;
  PublicHolidayId:any;
  PublicHolidayArr:any=[];
  constructor(private location: Location,
    private _formBuilder:FormBuilder,
              private PublicHolidayService:PublicHolidayService,
            private route:Router,private snackBar: MatSnackBarComponent,
            private datePipe: DatePipe,
            private activateRout: ActivatedRoute,) {
             
    this.PublicHolidayForm = this._formBuilder.group({
      Arname: [this.PublicHolidayArr.Arname, [Validators.required]],
      Enname: [this.PublicHolidayArr.Enname, [Validators.required]],
      Fdate:[this.PublicHolidayArr.Fdate, [Validators.required]],
      Tdate: [this.PublicHolidayArr.Tdate,[Validators.required]],
    });
   }
   get Arname() {
    return this.PublicHolidayForm.get('Arname');
  } 
  get Enname() {
    return this.PublicHolidayForm.get('Enname');
  } 
  get Fdate() {
    return this.PublicHolidayForm.get('Fdate');

  } 
  get Tdate() {
     return this.PublicHolidayForm.get('Tdate');
    

  } 
  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.PublicHolidayId = this.activateRout.snapshot.paramMap.get('id');
    if (this.PublicHolidayId != 0) {
      this.PublicHolidayService.getPublicHolidayIdUrl(this.PublicHolidayId).subscribe((res: any) => {
        this.PublicHolidayArr = res
      })
    }
  }
  createOrEditPublicHolidayForm()
  {
    if (this.PublicHolidayId == 0) {
      this.PublicHolidayForm.value.Fdate=this.datePipe.transform(this.PublicHolidayForm.value.Fdate, 'yyyy-MM-dd');
      this.PublicHolidayForm.value.Tdate=this.datePipe.transform(this.PublicHolidayForm.value.Tdate, 'yyyy-MM-dd');
      this.PublicHolidayService.addPublicHoliday(this.PublicHolidayForm.value).subscribe((res: any) => {
      if(res!=null)
      {
        this.snackBar.openSnackBar('sucessfully Added ','Close','green-snackbar');
        // this.route.navigate(['/defaultPage/PublicHolidaylist'])
        this.location.back()

      }
      else{
        this.snackBar.openSnackBar('faild Added ','Close','red-snackbar');
  
      }
      
      });
    }
    else{
      this.PublicHolidayForm.value.Fdate=this.datePipe.transform(this.PublicHolidayForm.value.Fdate, 'yyyy-MM-dd');
      this.PublicHolidayForm.value.Tdate=this.datePipe.transform(this.PublicHolidayForm.value.Tdate, 'yyyy-MM-dd');
      this.PublicHolidayService.editPublicHoliday(this.PublicHolidayId,this.PublicHolidayForm.value).subscribe((res: any) => {
  
        this.snackBar.openSnackBar('sucessfully Edited ','Close','green-snackbar');
        // this.route.navigate(['/defaultPage/PublicHolidaylist'])
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
    this.PublicHolidayForm.reset();
  }



}


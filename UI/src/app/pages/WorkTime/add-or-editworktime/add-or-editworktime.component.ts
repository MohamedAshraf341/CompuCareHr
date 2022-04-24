import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { WorktimeService } from 'src/app/services/worktime/worktime.service';
import { ShiftService } from 'src/app/services/shift/shift.service';
import { shift } from 'src/app/models/shift.model';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-editworktime',
  templateUrl: './add-or-editworktime.component.html',
  styleUrls: ['./add-or-editworktime.component.css']
})
export class AddOrEditworktimeComponent implements OnInit {
  shifts:shift[]=[];
  empworkid:any;
  empArr:any=[];
  employeeworkForm:FormGroup;

  constructor(private location: Location,
    private ShiftService :ShiftService,
    private EmpWorkService:WorktimeService,
    private activateRout:ActivatedRoute,
    private _formBuilder:FormBuilder,
    private snackBar:MatSnackBarComponent,
    private route:Router,
    private http:HttpClient,
    private datePipe: DatePipe
  ) 
  { 
    this.employeeworkForm = this._formBuilder.group({
      FromDate: [this.empArr.FromDate, [Validators.required]],
      ToDate: [this.empArr.ToDate, [Validators.required]],
      StartSign:[this.empArr.StartSign,[Validators.required]],
      EndSign:[this.empArr.EndSign,[Validators.required]],
      StartShift:[this.empArr.StartShift,[Validators.required]],
      EndShift:[this.empArr.EndShift,[Validators.required]],
      EarlyPermission:[this.empArr.EarlyPermission,[Validators.required]],
      LatePermission:[this.empArr.LatePermission,[Validators.required]],
      isHour:[this.empArr.isHour,[]],
      isDayOff:[this.empArr.isDayOff,[]],
      OverTimeStart:[this.empArr.OverTimeStart,[Validators.required]],
      ShiftId:[this.empArr.ShiftId,[]],
    });
  }
  get FromDate() {
    return this.employeeworkForm.get('FromDate');
  }
  get ToDate() {
    return this.employeeworkForm.get('ToDate');
  }
  get StartSign() {
    return this.employeeworkForm.get('StartSign');
  }
  get EndSign() {
    return this.employeeworkForm.get('EndSign');
  }
  get StartShift() {
    return this.employeeworkForm.get('StartShift');
  }
  get EndShift() {
    return this.employeeworkForm.get('endShift');
  }
  get EarlyPermission() {
    return this.employeeworkForm.get('EarlyPermission');
  }
  get LatePermission() {
    return this.employeeworkForm.get('LatePermission');
  }
  get isHour() {
    return this.employeeworkForm.get('isHour');
  }
  get isDayOff() {
    return this.employeeworkForm.get('isDayOff');
  }
  get OverTimeStart() {
    return this.employeeworkForm.get('OverTimeStart');
  }
  get ShiftId() {
    return this.employeeworkForm.get('ShiftId');
  }

  ngOnInit(): void {
    this.empworkid = this.activateRout.snapshot.paramMap.get('id');
    console.log('id', this.empworkid)
    if (this.empworkid != 0) {
      this.EmpWorkService.GetEmpWorkById(this.empworkid).subscribe((res: any) => {
        console.log(res)
        this.empArr = res
      })
    }
    this.getdropdownshift();
  }
  changeStop(Stop:any)
  {
    console.log('asmaa',Stop.value);
  }
    // get dropdown Shift
    getdropdownshift() {
      this.ShiftService.getShiftUrl().subscribe((res: any) => {
     this.shifts = res;
      });
    }
//     createOrEditemployeeWork()
//     {
      
     
//       if(this.employeeworkForm.get('isHour')?.value==undefined)
//     {
//       this.employeeworkForm.patchValue({
//         Stop: false,
//       });
//     }
//     if(this.employeeworkForm.get('isDayOff')?.value==undefined)
//     {
//       this.employeeworkForm.patchValue({
//         Stop: false,
//       });
//     }
// this.employeeworkForm.value.isHour=false;

// this.employeeworkForm.value.isDayOff=false;
//     this.employeeworkForm.value.fromDate=this.datePipe.transform(this.employeeworkForm.value.fromDate, 'yyyy-MM-dd');
//     this.employeeworkForm.value.toDate=this.datePipe.transform(this.employeeworkForm.value.toDate, 'yyyy-MM-dd');
    
//      console.log('this.employeeworkForm.value',this.employeeworkForm.value);
//      Object.keys(this.employeeworkForm.value).forEach((k) => {
//        if(this.employeeworkForm.value[k]==undefined)
//        {
//         this.employeeworkForm.value[k]=null
//        }
//     })
//     console.log('this.employeeworkForm2',this.employeeworkForm.value);
  
//     const formData = new FormData();
//       Object.keys(this.employeeworkForm.value).forEach((k) => {
//         formData.append(k, this.employeeworkForm.value[k])
//       })
//       console.log('formData',formData);
//       formData.forEach((value,key) => {
//         console.log(key+" "+value)
       
//       });
   
//       if (this.empworkid == 0) {
//       this.http.post(
//         `${environment.apiUrl}EmpWork`,formData,  { responseType: 'text' }
//        ).subscribe((res: any) => {
//           if(res!=null)
//           {
//             this.snackBar.openSnackBar(res, 'Close', 'green-snackbar');
//             this.route.navigate(['/defaultPage/employeelist'])
//           }
//           else{
//             this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
//           }
//           });
//       }
//       else{
  
       
//         this.http.put(
//           `${environment.apiUrl}EmpWork/${this.empworkid}`,formData, { responseType: 'text' }
//          ).subscribe((res: any) => {
//           this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
//             this.route.navigate(['/defaultPage/employeelist'])
//           });
//       }
  
//     }
    createOrEditemployeeWork()
    {
      this.employeeworkForm.value.FromDate=this.datePipe.transform(this.employeeworkForm.value.FromDate, 'yyyy-MM-dd');
      this.employeeworkForm.value.ToDate=this.datePipe.transform(this.employeeworkForm.value.ToDate, 'yyyy-MM-dd');

    //   if(this.employeeworkForm.get('isHour')?.value==undefined)
    // {
    //   this.employeeworkForm.patchValue({
    //     Stop: false,
    //   });
    // }
    // if(this.employeeworkForm.get('isDayOff')?.value==undefined)
    // {
    //   this.employeeworkForm.patchValue({
    //     Stop: false,
    //   });
    // }
    this.employeeworkForm.value.isHour=false;

this.employeeworkForm.value.isDayOff=false;

      if(this.empworkid==0)
      {
        this.EmpWorkService.postNewEmpWork(this.employeeworkForm.value).subscribe((res: any) => {
     
          if(res!=null)
          {
        this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
            // this.route.navigate(['/defaultPage/worktime'])
            this.location.back()
          }
          else{
            this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
      
      
          }
          
          });
      }
      else
      {
        this.EmpWorkService.UpdateEmpWork(this.empworkid,this.employeeworkForm.value).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
            // this.route.navigate(['/defaultPage/worktime'])
            this.location.back()
         
          });
  
      }

    }
    clear()
    {
      this.employeeworkForm.reset();
    }


}

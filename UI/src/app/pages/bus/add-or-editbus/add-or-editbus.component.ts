import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from 'src/app/services/bus/bus.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-editbus',
  templateUrl: './add-or-editbus.component.html',
  styleUrls: ['./add-or-editbus.component.css']
})
export class AddOrEditbusComponent implements OnInit {

 
  busId:any;
  busArr:any=[];
  busForm:FormGroup;
  constructor(private _formBuilder:FormBuilder,
              private busService:BusService,
            private route:Router,
            private activateRout:ActivatedRoute,
            private snackBar: MatSnackBarComponent) {
    this.busForm = this._formBuilder.group({
      Arname: [this.busArr.Arname, [Validators.required]],
      Enname: [this.busArr.Enname, [Validators.required]],
   
    });
   }
   get Arname() {
    return this.busForm.get('Arname');
  } 
  get Enname() {
    return this.busForm.get('Enname');
  } 
  ngOnInit(): void {
    this.busId=this.activateRout.snapshot.paramMap.get('id');
    if(this.busId!=0)
    {
      this.busService.getBusIdUrl(this.busId).subscribe((res:any)=>{
       this.busArr=res
      })

     
    }
  }
  createOrEditBus()
  {
    if(this.busId==0)
    {
      this.busService.addBus(this.busForm.value).subscribe((res: any) => {
   
        if(res!=null)
        {
      this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/buslist'])
        }
        else{
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
    
        }
        
        });
    }
    else
    {
      this.busService.editBus(this.busId,this.busForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/buslist'])
       
        });

    }
   
   
  }
  clear()
  {
    this.busForm.reset();
  }
}

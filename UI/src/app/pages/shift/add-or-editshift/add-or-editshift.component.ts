import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftService } from 'src/app/services/shift/shift.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-or-editshift',
  templateUrl: './add-or-editshift.component.html',
  styleUrls: ['./add-or-editshift.component.css']
})
export class AddOrEditshiftComponent implements OnInit {
  button:boolean;
  shiftForm!: FormGroup;
  shiftId: any;
  shiftArr: any = [];

  constructor(private location: Location,
    private _formBuilder: FormBuilder,
    private shiftService: ShiftService,
    private route: Router, private snackBar: MatSnackBarComponent,

    private activateRout: ActivatedRoute,
  ) {
    this.shiftForm = this._formBuilder.group({
      Arname: [this.shiftArr.Arname, [Validators.required]],
      Enname: [this.shiftArr.Enname, [Validators.required]],
    });
  }
  get Arname() {
    return this.shiftForm.get('Arname');
  }
  get Enname() {
    return this.shiftForm.get('Enname');
  }
  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.shiftId = this.activateRout.snapshot.paramMap.get('id');
    if (this.shiftId != 0) {
      this.shiftService.getShiftIdUrl(this.shiftId).subscribe((res: any) => {
        this.shiftArr = res
      })
    }
  }
  
  createOrEditShift() {
    if (this.shiftId == 0) {
      this.shiftService.addShift(this.shiftForm.value).subscribe((res: any) => {
        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/shiftlist'])
          this.location.back()

        }
        else {
          this.snackBar.openSnackBar('faild Added ', 'Close', 'red-snackbar');

        }

      });
    }
    else {
      this.shiftService.editShift(this.shiftId, this.shiftForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
        // this.route.navigate(['/defaultPage/shiftlist'])
        this.location.back()

      });
    }


  }
  Backtolist()
{
  this.location.back()
}
  clear() {
    this.shiftForm.reset();
  }

}

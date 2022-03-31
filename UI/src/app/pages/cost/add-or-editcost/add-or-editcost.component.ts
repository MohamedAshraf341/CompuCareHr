import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CostService } from 'src/app/services/cost/cost.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-editcost',
  templateUrl: './add-or-editcost.component.html',
  styleUrls: ['./add-or-editcost.component.css']
})
export class AddOrEditcostComponent implements OnInit {

  costForm!: FormGroup;

  costId: any;
  costArr: any = [];
  constructor(private _formBuilder: FormBuilder,
    private costService: CostService,

    private route: Router, private activateRout: ActivatedRoute,
    private snackBar: MatSnackBarComponent) {
    this.costForm = this._formBuilder.group({
      Arname: [this.costArr.Arname, [Validators.required]],
      Enname: [this.costArr.Enname, [Validators.required]],

    });
  }
  get Arname() {
    return this.costForm.get('Arname');
  }
  get Enname() {
    return this.costForm.get('Enname');
  }
  ngOnInit(): void {
    this.costId = this.activateRout.snapshot.paramMap.get('id');
    if (this.costId != 0) {
      this.costService.getCostIdUrl(this.costId).subscribe((res: any) => {
        this.costArr = res
      })
    }
  }
  createOrEditCost() {
    if (this.costId == 0) {
      this.costService.addCost(this.costForm.value).subscribe((res: any) => {
        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/costlist'])
        }
        else {
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

        }

      });
    }
    else {
      this.costService.editCost(this.costId, this.costForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
        this.route.navigate(['/defaultPage/costlist'])

      });

    }


  }
  clear() {
    this.costForm.reset();
  }
}

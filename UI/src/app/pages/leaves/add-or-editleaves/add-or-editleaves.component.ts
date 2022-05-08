import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesRule } from 'src/app/models/LeavesRule.model';
import { leavesType } from 'src/app/models/leavesType.model';
import { LeavesVac } from 'src/app/models/LeavesVac.model';
import { LeavesService } from 'src/app/services/leaves/leaves.service';
import { LeavesRulesService } from 'src/app/services/LeavesRules/leaves-rules.service';
import { LeavesTypesService } from 'src/app/services/leavesTypes/leaves-types.service';
import { LeavesVacsService } from 'src/app/services/LeavesVacs/leaves-vacs.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-editleaves',
  templateUrl: './add-or-editleaves.component.html',
  styleUrls: ['./add-or-editleaves.component.css']
})
export class AddOrEditleavesComponent implements OnInit {

  button:boolean;
  leavesForm!: FormGroup;
  leaveId: any;
  leaveIdArr: any = [];
  leavesTypes: leavesType[] = [];
  LeavesRules: LeavesRule[] = [];
  LeavesVacs: LeavesVac[] = [];
  constructor(private location: Location,
    private _formBuilder: FormBuilder,
    private LeavesService: LeavesService,
    private route: Router,
    private activateRout: ActivatedRoute,
    private snackBar: MatSnackBarComponent,
    private LeavesTypesService: LeavesTypesService,
    private LeavesRulesService: LeavesRulesService,
    private LeavesVacsService: LeavesVacsService
    ) {

    this.leavesForm = this._formBuilder.group({
      Name: [this.leaveIdArr.Name, [Validators.required]],
      Alis: [this.leaveIdArr.Alis, []],
      Type: [this.leaveIdArr.Type, [Validators.required]],
      ISsub: [this.leaveIdArr.ISsub, []],
      AcceptVac: [this.leaveIdArr.AcceptVac, []],
      leavesVacId: [this.leaveIdArr.leavesVacId, []],
      CutVal: [this.leaveIdArr.CutVal, []],
      LeavesRuleID: [this.leaveIdArr.LeavesRuleID, []],


    });
  }

  ngOnInit(): void {
    this.button=JSON.parse(this.activateRout.snapshot.paramMap.get('button'));
    this.leaveId = this.activateRout.snapshot.paramMap.get('id');
    console.log('  this.leaveId',  this.leaveId)

    if (this.leaveId != 0) {
      this.LeavesService.getLeavesIdUrl(this.leaveId).subscribe((res: any) => {
        console.log('re',res)
        this.leaveIdArr = res
      })
    }
    this.getListOfleavesTypes();
    this.getListOfleavesRules();
    this.getListOfleavesVacations();


  }
  createOrEditLeaves() {
    if(this.leavesForm.get('ISsub')?.value==undefined)
    {
      this.leavesForm.patchValue({
        ISsub: false,
      });
    }
    if(this.leavesForm.get('AcceptVac')?.value==undefined)
    {
      this.leavesForm.patchValue({
        AcceptVac: false,
      });
    }
    console.log(this.leavesForm.value);
    if (this.leaveId == 0) {
      this.LeavesService.addLeaves(this.leavesForm.value).subscribe((res: any) => {
        console.log('addd',res)
        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          // this.route.navigate(['/defaultPage/leaves'])
          this.location.back()

        }
        else {
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

        }

      });
    }
    else {
      this.LeavesService.editLeaves(this.leaveId, this.leavesForm.value).subscribe((res: any) => {
        console.log('resaedit',res)

        this.snackBar.openSnackBar('sucessfully edited ', 'Close', 'green-snackbar');
        // this.route.navigate(['/defaultPage/leaves'])
        this.location.back()

      });
    }


  }
  Backtolist()
  {
    this.location.back()
  }
  clear() {
    this.leavesForm.reset();
  }

  getListOfleavesTypes() {
    this.LeavesTypesService.getLeavesTypes().subscribe((res: any) => {
      this.leavesTypes = res;
    });
  }
  getListOfleavesRules() {
    this.LeavesRulesService.getLeavesRules().subscribe((res: any) => {
      this.LeavesRules = res;

    });
  }
  getListOfleavesVacations() {
    this.LeavesVacsService.getLeavesVacs().subscribe((res: any) => {
      this.LeavesVacs = res;

    });
  }
}

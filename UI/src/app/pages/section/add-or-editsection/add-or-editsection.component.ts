import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SectionService } from 'src/app/services/section/section.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-add-or-editsection',
  templateUrl: './add-or-editsection.component.html',
  styleUrls: ['./add-or-editsection.component.css']
})
export class AddOrEditsectionComponent implements OnInit {

  sectionForm!: FormGroup;
  SectionId: any;
  sectionArr: any = [];


  constructor(private _formBuilder: FormBuilder,
    private sectionService: SectionService,
    private route: Router, private snackBar: MatSnackBarComponent,

    private activateRout: ActivatedRoute,
  ) {
    this.sectionForm = this._formBuilder.group({
      Arname: [this.sectionArr.Arname, [Validators.required]],
      Enname: [this.sectionArr.Enname, [Validators.required]],

    });
  }
  get Arname() {
    return this.sectionForm.get('Arname');
  }
  get Enname() {
    return this.sectionForm.get('Enname');
  }
  ngOnInit(): void {
    this.SectionId = this.activateRout.snapshot.paramMap.get('id');
    if (this.SectionId != 0) {
      this.sectionService.getSectionIdUrl(this.SectionId).subscribe((res: any) => {
        this.sectionArr = res
      })
    }
  }
  createOrEditSection() {
    if (this.SectionId == 0) {
      this.sectionService.addSection(this.sectionForm.value).subscribe((res: any) => {
        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.route.navigate(['/defaultPage/sectionlist'])
        }
        else {
          this.snackBar.openSnackBar('faild Added ', 'Close', 'red-snackbar');

        }

      });
    }
    else {
      this.sectionService.editSection(this.SectionId, this.sectionForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
        this.route.navigate(['/defaultPage/sectionlist'])

      });
    }


  }
  clear() {
    this.sectionForm.reset();
  }

}

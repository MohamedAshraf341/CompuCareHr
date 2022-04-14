import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { usersystempage } from 'src/app/models/usersystempage';
import { pages } from 'src/app/models/pages';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {
  permissionForm!: FormGroup;
  permissionArr: any = [];
  employees: employee[] = [];
  pages: pages[] = [];

  constructor(private employeeService: EmployeeService,
    private Permission: PermissionService,
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog, private _formBuilder: FormBuilder) {
    this.permissionForm = this._formBuilder.group({
      userid: [this.permissionArr.userid, [Validators.required]],
      pageId: [this.permissionArr.pageId, []],
      New: [this.permissionArr.New, []],
      edit: [this.permissionArr.edit, []],
      delete: [this.permissionArr.delete, []],

    });
  }
  get userid() {
    return this.permissionForm.get('userid');
  }
  get pageId() {
    return this.permissionForm.get('pageId');
  }
  get New() {
    return this.permissionForm.get('New');
  }
  get edit() {
    return this.permissionForm.get('edit');
  }
  get delete() {
    return this.permissionForm.get('delete');
  }

  ngOnInit(): void {
    this.getListOfpermission();
    this.getListOfemployees();
    }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }
  getListOfpermission() {
    this.Permission.getpages().subscribe((res: any) => {
      this.pages = res;
    });
  }
  createpermission() {
    if (this.permissionForm.get('New')?.value == undefined) {
      this.permissionForm.patchValue({
        New: false,
      });
    }
    if (this.permissionForm.get('edit')?.value == undefined) {
      this.permissionForm.patchValue({
        edit: false,
      });
    }
    if (this.permissionForm.get('delete')?.value == undefined) {
      this.permissionForm.patchValue({
        delete: false,
      });
    }
    this.Permission.addpermission(this.permissionForm.value).subscribe((res: any) => {
      if (res != null) {
        this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
        this.router.navigate(['/defaultPage/permission'])
      }
      else {
        this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

      }

    });
    console.log(this.permissionForm.value);

  }
  clear() {
    this.permissionForm.reset();
  }

}

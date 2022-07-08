import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department.model';
import {  DepartmentService} from 'src/app/services/department/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.scss']
})
export class ListdepartmentComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  departments: department[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private departmentService: DepartmentService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,3);
    this.getListOftable();

  }

  getpagepermission(userid:number,pageid:number) {
    this.Permission.getuserpermissionbypageid(userid,pageid).subscribe((res: any) => {
      this.userpage = res;
      console.log(res);
      if(this.userpage[0].New===false && this.userpage[0].edit===false && this.userpage[0].delete===false && this.userpage[0].login===false )
    {
      return this.router.navigate(['/NotFound']);
    }
    });
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.departmentService.getDepartmentUrl().subscribe((res: any) => {
      this.departments = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditdepartment/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditdepartment', id])
  }
  Delete(element: any) {

    this.departmentService.deleteDepartment(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, department) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(department);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}

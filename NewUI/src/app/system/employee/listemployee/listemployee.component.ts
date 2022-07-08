import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import {  EmployeeService} from 'src/app/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  employees: employee[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private employeeService: EmployeeService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,14);
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
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
      
      console.log(res);
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditemployee/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditemployee', id])
  }
  Delete(element: any) {

    this.employeeService.deleteEmployee(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, employee) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(employee);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

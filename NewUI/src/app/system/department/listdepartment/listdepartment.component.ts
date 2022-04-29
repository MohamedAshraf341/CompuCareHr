import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department.model';
import {  DepartmentService} from 'src/app/services/department/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.scss']
})
export class ListdepartmentComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  departments: department[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private departmentService: DepartmentService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
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

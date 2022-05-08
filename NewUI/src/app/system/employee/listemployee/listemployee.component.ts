import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import {  EmployeeService} from 'src/app/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {
public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  employees: employee[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private employeeService: EmployeeService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
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

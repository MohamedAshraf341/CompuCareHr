import { Component, OnInit } from '@angular/core';
import { shift } from 'src/app/models/shift.model';
import {  ShiftService} from 'src/app/services/shift/shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listshift',
  templateUrl: './listshift.component.html',
  styleUrls: ['./listshift.component.scss']
})
export class ListshiftComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  shifts: shift[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private shiftService: ShiftService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.shiftService.getShiftUrl().subscribe((res: any) => {
      this.shifts = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditshift/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditshift', id])
  }
  Delete(element: any) {

    this.shiftService.deleteShift(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, shift) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(shift);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}

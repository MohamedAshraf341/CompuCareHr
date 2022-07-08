import { Component, OnInit } from '@angular/core';
import { shift } from 'src/app/models/shift.model';
import {  ShiftService} from 'src/app/services/shift/shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listshift',
  templateUrl: './listshift.component.html',
  styleUrls: ['./listshift.component.scss']
})
export class ListshiftComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  shifts: shift[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private shiftService: ShiftService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,6);
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

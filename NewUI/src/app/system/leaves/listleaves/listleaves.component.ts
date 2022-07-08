import { Component, OnInit } from '@angular/core';
import { leavemodel } from 'src/app/models/leavemodel.model';
import { LeavesService } from 'src/app/services/leaves/leaves.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listleaves',
  templateUrl: './listleaves.component.html',
  styleUrls: ['./listleaves.component.scss']
})
export class ListleavesComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  leaves: leavemodel[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private leaveService: LeavesService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,13);
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
    this.leaveService.getLeavesUrl().subscribe((res: any) => {
      this.leaves = res;
      console.log(res);
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditleaves/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditleaves', id])
  }
  Delete(element: any) {

    this.leaveService.deleteLeaves(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, leave) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(leave);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

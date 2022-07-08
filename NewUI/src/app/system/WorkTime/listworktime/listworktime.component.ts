import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { worktime } from 'src/app/models/worktime.model';
import { WorktimeService } from 'src/app/services/worktime/worktime.service';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-listworktime',
  templateUrl: './listworktime.component.html',
  styleUrls: ['./listworktime.component.scss']
})
export class ListworktimeComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  worktimes: worktime[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private worktimeService: WorktimeService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,9);
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
    this.worktimeService.GetAllEmpWork().subscribe((res: any) => {
      this.worktimes = res;
      console.log(res);
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditworktime/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditworktime', id])
  }
  Delete(element: any) {

    this.worktimeService.DeleteEmpWork(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, worktime) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(worktime);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

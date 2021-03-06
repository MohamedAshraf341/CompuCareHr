import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch/branch.service';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listbranch',
  templateUrl: './listbranch.component.html',
  styleUrls: ['./listbranch.component.scss']
})
export class ListbranchComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  branchs: branch[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private branchService: BranchService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,2);
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
    this.branchService.getBranchesUrl().subscribe((res: any) => {
      this.branchs = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditbranch/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditbranch', id])
  }
  Delete(element: any) {
    this.branchService.deleteBranch(element.Id).subscribe((res: any) => {
    });
    this.getListOftable();
  }
  public openModal(modalContent, branch) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(branch);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserSystem } from 'src/app/models/UserSystem';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { usersystempage } from 'src/app/models/usersystempage';
@Component({
  selector: 'app-listuserrole',
  templateUrl: './listuserrole.component.html',
  styleUrls: ['./listuserrole.component.scss']
})
export class ListuserroleComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  UserSystems: UserSystem[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private UserSystemService: PermissionService,
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,16);
    this.getListOftable();
  }

  getpagepermission(userid:number,pageid:number) {
    this.UserSystemService.getuserpermissionbypageid(userid,pageid).subscribe((res: any) => {
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
    this.UserSystemService.getusers().subscribe((res: any) => {
      this.UserSystems = res;
      console.log(this.UserSystems);
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEdituserrole/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEdituserrole', id])
  }
  Delete(element: any) {

    // this.UserSystemService.deleteUserSystem(element.Id).subscribe((res: any) => {
    //   this.getListOftable();
    // });
  }
  public openModal(modalContent, UserSystem) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(UserSystem);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}

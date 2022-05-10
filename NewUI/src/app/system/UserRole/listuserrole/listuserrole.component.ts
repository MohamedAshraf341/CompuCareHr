import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserSystem } from 'src/app/models/UserSystem';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listuserrole',
  templateUrl: './listuserrole.component.html',
  styleUrls: ['./listuserrole.component.scss']
})
export class ListuserroleComponent implements OnInit {

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
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.UserSystemService.getusers().subscribe((res: any) => {
      this.UserSystems = res;
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

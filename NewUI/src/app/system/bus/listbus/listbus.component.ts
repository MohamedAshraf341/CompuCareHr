import { Component, OnInit } from '@angular/core';
import { bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.scss']
})
export class ListbusComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  bus: bus[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private busService: BusService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,5);
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
    this.busService.getBusUrl().subscribe((res: any) => {
      this.bus = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditbus/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditbus', id])
  }
  Delete(element: any) {

    this.busService.deleteBus(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, bus) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(bus);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { publicHoliday } from 'src/app/models/publicholiday.model';
import { PublicHolidayService } from 'src/app/services/publicHoliday/public-holiday.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listpublicholiday',
  templateUrl: './listpublicholiday.component.html',
  styleUrls: ['./listpublicholiday.component.scss']
})
export class ListpublicholidayComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  publichliodays: publicHoliday[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private publichliodayService: PublicHolidayService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,7);
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
    this.publichliodayService.getPublicHolidayUrl().subscribe((res: any) => {
      this.publichliodays = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditpublicholihday/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditpublicholihday', id])
  }
  Delete(element: any) {

    this.publichliodayService.deletePublicHoliday(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, publichlioday) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(publichlioday);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

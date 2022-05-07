import { Component, OnInit } from '@angular/core';
import { publicHoliday } from 'src/app/models/publicholiday.model';
import { PublicHolidayService } from 'src/app/services/publicHoliday/public-holiday.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listpublicholiday',
  templateUrl: './listpublicholiday.component.html',
  styleUrls: ['./listpublicholiday.component.scss']
})
export class ListpublicholidayComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  publichliodays: publicHoliday[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private publichliodayService: PublicHolidayService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { worktime } from 'src/app/models/worktime.model';
import { WorktimeService } from 'src/app/services/worktime/worktime.service';

@Component({
  selector: 'app-listworktime',
  templateUrl: './listworktime.component.html',
  styleUrls: ['./listworktime.component.scss']
})
export class ListworktimeComponent implements OnInit {

  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  worktimes: worktime[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private worktimeService: WorktimeService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.worktimeService.GetAllEmpWork().subscribe((res: any) => {
      this.worktimes = res;
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

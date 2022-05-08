import { Component, OnInit } from '@angular/core';
import { jobLevel } from 'src/app/models/jobLevel.model';
import { JobLevelService } from 'src/app/services/jobLevel/job-level.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listjoblevel',
  templateUrl: './listjoblevel.component.html',
  styleUrls: ['./listjoblevel.component.scss']
})
export class ListjoblevelComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  joblevels: jobLevel[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private joblevelService: JobLevelService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.joblevelService.getJobLevelUrl().subscribe((res: any) => {
      this.joblevels = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditjoblevel/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditjoblevel', id])
  }
  Delete(element: any) {

    this.joblevelService.deleteJobLevel(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, joblevel) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(joblevel);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

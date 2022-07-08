import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/models/job.model';
import {  JobService} from 'src/app/services/job/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listjob',
  templateUrl: './listjob.component.html',
  styleUrls: ['./listjob.component.scss']
})
export class ListjobComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  jobs: job[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private jobService: JobService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,4);
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
    this.jobService.getJobUrl().subscribe((res: any) => {
      this.jobs = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditjob/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditjob', id])
  }
  Delete(element: any) {

    this.jobService.deleteJob(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, job) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(job);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

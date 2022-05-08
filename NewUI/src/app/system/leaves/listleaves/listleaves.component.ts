import { Component, OnInit } from '@angular/core';
import { leavemodel } from 'src/app/models/leavemodel.model';
import { LeavesService } from 'src/app/services/leaves/leaves.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listleaves',
  templateUrl: './listleaves.component.html',
  styleUrls: ['./listleaves.component.scss']
})
export class ListleavesComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  leaves: leavemodel[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private leaveService: LeavesService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.leaveService.getLeavesUrl().subscribe((res: any) => {
      this.leaves = res;
      console.log(res);
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditleaves/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditleaves', id])
  }
  Delete(element: any) {

    this.leaveService.deleteLeaves(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, leave) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(leave);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }
}

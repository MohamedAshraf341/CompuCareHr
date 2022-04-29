import { Component, OnInit } from '@angular/core';
import { branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch/branch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listbranch',
  templateUrl: './listbranch.component.html',
  styleUrls: ['./listbranch.component.scss']
})
export class ListbranchComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  branchs: branch[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private branchService: BranchService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
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
      this.getListOftable();
    });
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

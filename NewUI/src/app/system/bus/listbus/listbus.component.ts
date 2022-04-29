import { Component, OnInit } from '@angular/core';
import { bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.scss']
})
export class ListbusComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  bus: bus[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private busService: BusService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
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

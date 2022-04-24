import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

    dataSource: MatTableDataSource<client>;
    clients: client[];
    colums: string[] = ["name", "note","branch","actions"];
    @ViewChild(MatSort, { static: true })
    sort!: MatSort;
    @ViewChild(MatPaginator, { static: true })
    paginator!: MatPaginator;
    constructor(private clientService:ClientService) {
      this.clients = [{
        name: 'asmaa', age: 12,address:'cairo'
      },
      {
        name: 'alaa', age: 22,address:'cairo'
      },
      {
        name: 'hala', age: 12,address:'cairo'
      }, {
        name: 'aya', age: 20,address:'cairo'
      }, {
        name: 'hoda',age: 72,address:'cairo'
      }, {
        name: 'fatima', age: 42,address:'cairo'
      }, {
        name: 'ahmed', age: 32,address:'cairo'
      }, {
        name: 'hager',age: 11,address:'cairo'
      }, {
        name: 'noha', age: 17,address:'cairo'
      }, {
        name: 'ali', age: 13,address:'cairo'
      }, {
        name: 'mai', age: 15,address:'cairo'
      },
      ];
      this.dataSource = new MatTableDataSource(this.clients);
  
    }
  
    ngOnInit(): void {
      this.getListOfComanies();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    view(id:number,button:boolean)
  {
    // this.router.navigate(['/defaultPage/addOrEditbranch/'+id+'/'+button])
  }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    getListOfComanies() {
      this.clientService.getClientsUrl().subscribe((res: any) => {
        this.clients = res;
      });
    }

}

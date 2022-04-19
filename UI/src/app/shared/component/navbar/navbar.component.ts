import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { usersystempage } from 'src/app/models/usersystempage';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // userpage :usersystempage[]=[];
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  comp:any;
  isActive=false;

  @Input()  userpage: usersystempage[];

  constructor(private Permission: PermissionService) { 
    
  }

  ngOnInit(): void {
    this.getpagesedit(87);
  }
  getpagesedit(id:number) {


    this.Permission.getuserpermissionbyid(id).subscribe((res: any) => {
      this.userpage = res;
      console.log(res);
       
    });
  }
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  

  //if(this.user.categoryPg  == false){
    // document.getElementById('leaves').style.display = 'none';
  //}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}

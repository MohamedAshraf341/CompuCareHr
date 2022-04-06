import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user :any;
  Username: any;
  password :any;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private loginService:LoginService,
  ) { }
  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  getListOfleavesTypes() {
    this.loginService.getLoginUrl(this.Username,this.password).subscribe((res: any) => {
      this.user = res;
    });
  }
}

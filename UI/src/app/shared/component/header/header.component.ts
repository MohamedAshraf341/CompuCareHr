import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name :string;
  user :any;
  Username: any;
  password :any;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(
    private loginService:LoginService,
  ) { }
  ngOnInit(): void {
    this.name= JSON.parse(localStorage.getItem('username') as any);
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

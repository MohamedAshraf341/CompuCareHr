import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Settings } from '../../app.sttings.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public settings: Settings;
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
  public changeTheme(theme:any){
    this.settings.theme.skin = theme;
    sessionStorage["skin"] = theme;        
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

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notfication/notification.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  constructor(router:Router, private loginService:LoginService, fb:FormBuilder,private notifyService : NotificationService) {
      this.router = router;
      this.form = fb.group({
          'username': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });

      this.username = this.form.controls['username'];
      this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
     
      if (this.form.valid) {
        this.loginService.getLoginUrl(this.form.value.username,this.form.value.password)
        .subscribe((res:any)=>{
            
                localStorage.setItem('UserId', JSON.stringify(res.UsId));
                
          
          if(res.status=="Success")
          {
            this.router.navigate(['defaultPage'])
            return this.notifyService.showSuccess("Login successfully !!", res.username)    
          }
          else
          {
           return this.notifyService.showError( "login failed","UserNamme or Password is wrong")
    
          }
         })
      }
  }

  ngAfterViewInit(){
      document.getElementById('preloader').classList.add('hide');                 
  }

}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

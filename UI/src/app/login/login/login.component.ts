import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(private _formBuilder:FormBuilder,
    private loginService:LoginService,
    private snackBar:MatSnackBarComponent,
    private router:Router) { 
    this.loginform = this._formBuilder.group({
      Username: [, [Validators.required]],
      password: [, [Validators.required]],
   
    });
  }

  ngOnInit(): void {
  }
  login()
  {
    console.log('login',this.loginform.value);
    this.loginService.getLoginUrl(this.loginform.value.Username,this.loginform.value.password)
    .subscribe((res:any)=>{
      console.log('res',res);
            localStorage.setItem('UserId', JSON.stringify(res.UsId));
      this.router.navigate(['defaultPage'])
      if(res.status=="Success")
      {

        this.snackBar.openSnackBar('Welcome', res.Name, 'green-snackbar');

      }
      else
      {
        this.snackBar.openSnackBar('UserNamme or Password is wrong', 'Close', 'red-snackbar');

      }
     })

    
  }
}

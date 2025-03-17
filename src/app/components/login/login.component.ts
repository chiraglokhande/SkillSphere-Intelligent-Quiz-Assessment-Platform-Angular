import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: LoginService, private router: Router) {}

  login = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });


  loginUser() {
    console.log(this.login.value);

    this.service.login(this.login.value).subscribe((res) => {
      console.log(res);
      if (res==='true' && this.login.get('username')?.value!='admin' ) {
        this.router.navigate(['/user-dashboard']);
      }
      else if(this.login.get('username')?.value=='admin'){
this.router.navigate(['/admin-dashboard'])
      }

      else {
        // Handle invalid login response here
        alert('Invalid credentials!');
      }
    });
  }
}

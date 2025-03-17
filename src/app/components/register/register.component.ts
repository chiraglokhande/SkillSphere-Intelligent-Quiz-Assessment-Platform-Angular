import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private regi:RegisterService){}

  user=new FormGroup(
    {
      firstName:new FormControl(),
      lastName:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
    }
  );

login() {
  console.log(this.user.value);

  this.regi.registerUser(this.user.value).subscribe((res)=>
  {
   alert(res);
   this.user.reset();

  });

}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
constructor(private userService:UserService,private route:ActivatedRoute){}

ngOnInit(): void {

  let temp=this.route.snapshot.paramMap.get('username');
    this.getAll(temp)

  }

  user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
  }

updateUser()
{
  this.userService.updateUser(this.user).subscribe((res)=>
 {
  alert(res);
 } )
}

  getAll(username:any)
  {
  this.userService.getByUsername(username).subscribe((res)=>{
  this.user=res;
})
  }

}

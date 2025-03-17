import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getAll()
  }

  users:any[]=[]


  getAll()
  {

    this.userService.getusers().subscribe((res)=>{

      this.users=res;


    })


  }

    deleteUser(username:any)
    {
let confimation=window.confirm("Are You Sure You Want To Delete This User")

if(confimation){
      this.userService.deleteByUsername(username).subscribe((res)=>
      {
        alert(res);
        location.reload();
      })
    }
    else{
      alert("Deletion Cancelled");
    }

    }



  }



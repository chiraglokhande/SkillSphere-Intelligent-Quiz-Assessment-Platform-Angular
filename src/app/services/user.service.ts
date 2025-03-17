import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getData():Observable<any>
{


  return this.http.get("http://localhost:8080/course/getCourse",{});
}

getusers():Observable<any>
{

  return this.http.get("http://localhost:8080/user/get");
}

updateUser(user:any):Observable<any>
{
return this.http.put("http://localhost:8080/user/update",user,{responseType:'text'});
}

getByUsername(username:string):Observable<any>
{
  return this.http.get(`http://localhost:8080/user/getByUsername/${username}`);

}
deleteByUsername(username:string):Observable<any>
{
  return this.http.delete(`http://localhost:8080/user/delete/${username}`,{responseType:'text'});
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  addQuestion(question:any):Observable<any>
  {
    return this.http.post("http://localhost:8080/question/add-question",question,{responseType:'text'});
  }

  updateQuestion(Question: any):Observable<any> {

    return this.http.put("http://localhost:8080/question/update-questions",Question,{responseType:'text'});
  }


}

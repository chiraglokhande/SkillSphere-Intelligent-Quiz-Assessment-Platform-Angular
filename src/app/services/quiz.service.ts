import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }


  getAll():Observable<any>
  {
    return this.http.get("http://localhost:8080/quiz/get-quiz")
  }

  addQuizTitle(quizTitle:string):Observable<any>
  {
    const body = { title: quizTitle };
    return this.http.post("http://localhost:8080/quiz/add-quiz",body,{responseType:'text'});
  }

  deleteQuiz(title:string):Observable<any>
  {
    return this.http.delete(`http://localhost:8080/quiz/delete-quiz/${title}`,{responseType:'text'});
  }

  getAllQuestion(title:string):Observable<any>
  {
return this.http.get(`http://localhost:8080/question/get-questionsByQuizTitle/${title}`);
  }
  submitQuiz(arr:any[]=[]):Observable<any>
  {
    return this.http.post("http://localhost:8080/question/check-marks",arr,{});
  }
}

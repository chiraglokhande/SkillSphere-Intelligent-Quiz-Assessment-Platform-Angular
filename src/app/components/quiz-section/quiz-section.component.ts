import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-section',
  templateUrl: './quiz-section.component.html',
  styleUrls: ['./quiz-section.component.css']
})
export class QuizSectionComponent implements OnInit {

constructor(private quizService:QuizService){}
  ngOnInit(): void {
   this.getQuiz()
  }

 quiztitle:any[]=[];


getQuiz()
{

 (this.quiztitle);
  this.quizService.getAll().subscribe((res)=>
  {

this.quiztitle=res.map((quiz:any)=>quiz.title);

})
}

}

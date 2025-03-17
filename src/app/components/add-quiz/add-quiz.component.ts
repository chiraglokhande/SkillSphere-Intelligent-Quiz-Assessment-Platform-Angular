import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  constructor(private quizService:QuizService){}

title:string='';


  addTitle()
  {
this.quizService.addQuizTitle(this.title).subscribe((res)=>
{

  if(res)
  {
    alert("The Quiz Title Is Added")
  }
  alert(res);
})
  }
}

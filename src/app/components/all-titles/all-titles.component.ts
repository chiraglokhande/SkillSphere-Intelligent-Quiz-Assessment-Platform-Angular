import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-all-titles',
  templateUrl: './all-titles.component.html',
  styleUrls: ['./all-titles.component.css']
})
export class AllTitlesComponent implements OnInit {

constructor(private quizService:QuizService){}


ngOnInit(): void {

this.getQuiz()
}




title:any[]=[]

  getQuiz()
{

 (this.title);
  this.quizService.getAll().subscribe((res)=>
  {

this.title=res.map((quiz:any)=>quiz.title);

})

}

deleteQuiz(title:any)
{
  this.quizService.deleteQuiz(title).subscribe((res:string)=>{
    alert(res);
    location.reload();
  })
}

}

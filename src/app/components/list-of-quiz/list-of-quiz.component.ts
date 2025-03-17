import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-list-of-quiz',
  templateUrl: './list-of-quiz.component.html',
  styleUrls: ['./list-of-quiz.component.css']
})
export class ListOfQuizComponent implements OnInit {

constructor(private quizService:QuizService){}
  ngOnInit(): void {
   this.getQuiz()
  }

 quiztitle:any[]=[];

 title:string='';


 addTitle() {
  this.quizService.addQuizTitle(this.title).subscribe((res) => {
    console.log(res);

    if (res ==='true') {
      alert("The Quiz Title is Added");
      location.reload();
    } else if(res==='false') {
      alert("The Quiz Title is NULL");
    }
  });
}





getQuiz()
{

 (this.quiztitle);
  this.quizService.getAll().subscribe((res)=>
  {

this.quiztitle=res.map((quiz:any)=>quiz.title);

})
}


}

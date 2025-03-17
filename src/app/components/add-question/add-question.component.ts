import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
constructor(private questionService:QuestionService,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.Question.quizTitle=this.route.snapshot.paramMap.get('item');
  }

Question:any={

  question:'',
  a:'',
  b:'',
  c:'',
  d:'',
  answer:'',
quizTitle:''
}


  addQuestion()
  {
    console.log(this.Question);

    this.questionService.addQuestion(this.Question).subscribe((res)=>
    {
      alert(res);
    })
  }

}



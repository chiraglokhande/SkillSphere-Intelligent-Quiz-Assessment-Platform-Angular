import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
})
export class EditQuestionsComponent implements OnInit {
  title: any;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('item');

    this.getALLQuestion(this.route.snapshot.paramMap.get('item'));
    console.log(this.Question);
  }

  Question:any[]=[];

  getALLQuestion(title: any) {
    this.quizService.getAllQuestion(title).subscribe((res) => {
      this.Question = res;
    });
  }

  updateQuestion() {
    console.log(this.Question);

    this.questionService.updateQuestion(this.Question).subscribe((res) => {
      alert(res);
      location.reload();
    });
  }
}

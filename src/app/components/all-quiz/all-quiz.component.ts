import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.css'],
})
export class AllQuizComponent implements OnInit {
  title: any;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getQuiz();
    this.title = this.route.snapshot.paramMap.get('item');

    if (this.title) {
      this.getAllQuestionByQuizTitle(this.title);
    }

    console.log(this.selectedAnswers);
  }


  selectedAnswers: { ans: ''}[] = [];
  questions: any[] = [];
  showPopup: boolean = false;
  marks: number = 0;

  getQuiz() {
    this.quizService.getAll().subscribe((res) => {});
  }

  getAllQuestionByQuizTitle(title: any) {
    this.quizService.getAllQuestion(title).subscribe((res) => {
      this.questions = res;

    });

  }


  submitQuiz() {
    this.quizService.submitQuiz(this.selectedAnswers).subscribe((res: number) => {
      this.marks = res; // ✅ Store the received marks
      this.showPopup = true; // ✅ Show the popup
    }, (error) => {
      console.error("Error submitting quiz:", error);
    });
  }

  closePopup() {
    this.showPopup = false; // ✅ Hide the popup when clicking "Close"
  }
}


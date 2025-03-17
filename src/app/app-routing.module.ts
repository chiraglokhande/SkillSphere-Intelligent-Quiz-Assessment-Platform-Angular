import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizSectionComponent } from './components/quiz-section/quiz-section.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AllQuizComponent } from './components/all-quiz/all-quiz.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ListOfQuizComponent } from './components/list-of-quiz/list-of-quiz.component';
import { AllTitlesComponent } from './components/all-titles/all-titles.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"register", component:RegisterComponent
  },

  {
    path:"login",component:LoginComponent
  },
  {
    path:"user-course",component:UserCoursesComponent
  },
  {
    path:"user-dashboard", component:UserDashboardComponent
  },
  {
    path:"quiz", component:QuizComponent
  },
  {
    path:"quiz-section", component:QuizSectionComponent
  },
  {
    path:"admin-dashboard", component:AdminDashboardComponent
  },
  {
    path:"all-users", component:AllUsersComponent
  },
  {
    path:"edit-users/:username", component:EditUserComponent
  },
  {
    path:"delete-users/:username", component:DeleteUserComponent
  },
  {

    path:"all-quiz/:item", component:AllQuizComponent
  },
  {
    path:"add-quiz", component:AddQuizComponent
  },
  {
    path:"list-quiz", component:ListOfQuizComponent
  }
  ,
  {
    path:"all-titles", component:AllTitlesComponent
  }
  ,
  {
    path:"add-questions/:item", component:AddQuestionComponent
  },
  {
    path:"edit-questions/:item",component:EditQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

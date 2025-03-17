import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizSectionComponent } from './components/quiz-section/quiz-section.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AllQuizComponent } from './components/all-quiz/all-quiz.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ListOfQuizComponent } from './components/list-of-quiz/list-of-quiz.component';
import { AllTitlesComponent } from './components/all-titles/all-titles.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    UserMenuComponent,
    UserCoursesComponent,
    HomeMenuComponent,
    QuizComponent,
    QuizSectionComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AllUsersComponent,
    AddQuizComponent,
    EditUserComponent,
    DeleteUserComponent,
    AllQuizComponent,
    AddQuestionComponent,
    ListOfQuizComponent,
    AllTitlesComponent,
    EditQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

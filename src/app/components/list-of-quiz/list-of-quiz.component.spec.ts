import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfQuizComponent } from './list-of-quiz.component';

describe('ListOfQuizComponent', () => {
  let component: ListOfQuizComponent;
  let fixture: ComponentFixture<ListOfQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfQuizComponent]
    });
    fixture = TestBed.createComponent(ListOfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

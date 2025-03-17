import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuizComponent } from './all-quiz.component';

describe('AllQuizComponent', () => {
  let component: AllQuizComponent;
  let fixture: ComponentFixture<AllQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuizComponent]
    });
    fixture = TestBed.createComponent(AllQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTitlesComponent } from './all-titles.component';

describe('AllTitlesComponent', () => {
  let component: AllTitlesComponent;
  let fixture: ComponentFixture<AllTitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTitlesComponent]
    });
    fixture = TestBed.createComponent(AllTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

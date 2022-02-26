import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqFaqComponent } from './faq-faq.component';

describe('FaqFaqComponent', () => {
  let component: FaqFaqComponent;
  let fixture: ComponentFixture<FaqFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

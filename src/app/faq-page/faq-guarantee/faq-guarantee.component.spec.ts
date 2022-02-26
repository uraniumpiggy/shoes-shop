import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqGuaranteeComponent } from './faq-guarantee.component';

describe('FaqGuaranteeComponent', () => {
  let component: FaqGuaranteeComponent;
  let fixture: ComponentFixture<FaqGuaranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqGuaranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

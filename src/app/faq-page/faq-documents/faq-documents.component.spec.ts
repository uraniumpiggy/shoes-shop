import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDocumentsComponent } from './faq-documents.component';

describe('FaqDocumentsComponent', () => {
  let component: FaqDocumentsComponent;
  let fixture: ComponentFixture<FaqDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

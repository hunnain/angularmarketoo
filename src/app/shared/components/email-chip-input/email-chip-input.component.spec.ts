import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChipInputComponent } from './email-chip-input.component';

describe('EmailChipInputComponent', () => {
  let component: EmailChipInputComponent;
  let fixture: ComponentFixture<EmailChipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailChipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailChipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

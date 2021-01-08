import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreCreditComponent } from './create-store-credit.component';

describe('CreateStoreCreditComponent', () => {
  let component: CreateStoreCreditComponent;
  let fixture: ComponentFixture<CreateStoreCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoreCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoreCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

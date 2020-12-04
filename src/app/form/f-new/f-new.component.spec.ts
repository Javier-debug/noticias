import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FNewComponent } from './f-new.component';

describe('FNewComponent', () => {
  let component: FNewComponent;
  let fixture: ComponentFixture<FNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

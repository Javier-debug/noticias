import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LViewComponent } from './l-view.component';

describe('LViewComponent', () => {
  let component: LViewComponent;
  let fixture: ComponentFixture<LViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

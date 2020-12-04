import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LTemplateComponent } from './l-template.component';

describe('LTemplateComponent', () => {
  let component: LTemplateComponent;
  let fixture: ComponentFixture<LTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

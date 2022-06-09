import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBadgeSectionComponent } from './app-badge-section.component';

describe('AppBadgeSectionComponent', () => {
  let component: AppBadgeSectionComponent;
  let fixture: ComponentFixture<AppBadgeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBadgeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBadgeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

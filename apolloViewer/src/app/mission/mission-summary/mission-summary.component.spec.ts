import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSummaryComponent } from './mission-summary.component';

describe('MissionSummaryComponent', () => {
  let component: MissionSummaryComponent;
  let fixture: ComponentFixture<MissionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

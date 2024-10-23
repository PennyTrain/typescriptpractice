import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogAlarmComponent } from './analog-alarm.component';

describe('AnalogAlarmComponent', () => {
  let component: AnalogAlarmComponent;
  let fixture: ComponentFixture<AnalogAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalogAlarmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

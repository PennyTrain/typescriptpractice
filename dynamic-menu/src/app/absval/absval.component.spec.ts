import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsvalComponent } from './absval.component';

describe('AbsvalComponent', () => {
  let component: AbsvalComponent;
  let fixture: ComponentFixture<AbsvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsvalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpTooltipComponent } from './dp-tooltip.component';

describe('DpTooltipComponent', () => {
  let component: DpTooltipComponent;
  let fixture: ComponentFixture<DpTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DpTooltipComponent]
    });
    fixture = TestBed.createComponent(DpTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

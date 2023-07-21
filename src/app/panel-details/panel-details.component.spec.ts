import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDetailsComponent } from './panel-details.component';

describe('PanelDetailsComponent', () => {
  let component: PanelDetailsComponent;
  let fixture: ComponentFixture<PanelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelDetailsComponent]
    });
    fixture = TestBed.createComponent(PanelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

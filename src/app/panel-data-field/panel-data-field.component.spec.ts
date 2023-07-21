import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDataFieldComponent } from './panel-data-field.component';

describe('PanelDataFieldComponent', () => {
  let component: PanelDataFieldComponent;
  let fixture: ComponentFixture<PanelDataFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelDataFieldComponent]
    });
    fixture = TestBed.createComponent(PanelDataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

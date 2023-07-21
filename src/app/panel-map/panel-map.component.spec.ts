import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMapComponent } from './panel-map.component';

describe('PanelMapComponent', () => {
  let component: PanelMapComponent;
  let fixture: ComponentFixture<PanelMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelMapComponent]
    });
    fixture = TestBed.createComponent(PanelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

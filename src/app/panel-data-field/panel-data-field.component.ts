import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
@Component({
  selector: 'app-panel-data-field',
  templateUrl: './panel-data-field.component.html',
  styleUrls: ['./panel-data-field.component.css'],
})
export class PanelDataFieldComponent implements OnInit {
  panelData: any[];
  selectedPanelData: any;
  showDetailsSidebar = false;
  showMapSidebars = false;
  constructor(private panelService: PanelService) {
    this.panelData = []; 
    this.selectedPanelData = null;
  }
  ngOnInit(): void {
    this.fetchPanelData();
  }
  fetchPanelData(): void {
    this.panelService.getDataOfPanel().subscribe(
      (response) => {
        if (response.statusCode === 200 && response.result) {
          this.panelData = response.result;
          console.log(this.panelData);
        }
      },
      (error) => {
        console.error('Error fetching panel data:', error);
      }
    );
  }
  showPanelDetails(panel: any): void {
    this.selectedPanelData = panel;
    this.showDetailsSidebar = true;
    this.showMapSidebars = false;
  }
  showMapSidebar(panel: any): void {
    this.selectedPanelData = panel;
    this.showMapSidebars = true;
    this.showDetailsSidebar = false; // Hide the details sidebar when showing map sidebar
  }
}

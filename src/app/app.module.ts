import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelDataFieldComponent } from './panel-data-field/panel-data-field.component';
import { PanelDetailsComponent } from './panel-details/panel-details.component';
import { PanelMapComponent } from './panel-map/panel-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [
    AppComponent,
    PanelDataFieldComponent,
    PanelDetailsComponent,
    PanelMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

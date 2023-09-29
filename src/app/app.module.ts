import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { DescriptionComponent } from './pages/description/description.component';
import { LandUseChangesComponent } from './pages/land-use-changes/land-use-changes.component';
import { CroplandComponent } from './pages/cropland/cropland.component';
import { GrasslandComponent } from './pages/grassland/grassland.component';
import { ManagementComponent } from './pages/management/management.component';
import { InlandWetlandsComponent } from './pages/inland-wetlands/inland-wetlands.component';
import { CoastalWetlandsComponent } from './pages/coastal-wetlands/coastal-wetlands.component';
import { FisheriesComponent } from './pages/fisheries/fisheries.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { ResultsComponent } from './pages/results/results.component';


import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';


import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SoilComponent } from './definition/soil/soil.component';
import { ClimateComponent } from './definition/climate/climate.component';
import { GlobalEcologicalComponent } from './definition/global-ecological/global-ecological.component';




@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    AppRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule ,
    MatTableModule,
    MatPaginatorModule
     ],
  declarations: [
    AppComponent,
    StartComponent,
    DescriptionComponent,
    LandUseChangesComponent,
    CroplandComponent,
    GrasslandComponent,
    ManagementComponent,
    InlandWetlandsComponent,
    CoastalWetlandsComponent,
    FisheriesComponent,
    InputsComponent,
    ResultsComponent,
    NavtabsComponent,
    SidenavComponent,
    ToolbarComponent,
    SoilComponent,
    ClimateComponent,
    GlobalEcologicalComponent,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DisplayComponent } from './display/display.component';
import { EquityComponent } from './equity/equity.component';
import { ShowEquityComponent } from './Equity/show-equity/show-equity.component';
import { EditEquityComponent } from './Equity/edit-equity/edit-equity.component';
import { BondComponent } from './bond/bond.component';
import { ShowBondComponent } from './Bond/show-bond/show-bond.component';
import { EditBondComponent } from './Bond/edit-bond/edit-bond.component';
import{SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BdispComponent } from './bdisp/bdisp.component';
import { BeditComponent } from './bedit/bedit.component';
import { EdispComponent } from './edisp/edisp.component';
import { EeditComponent } from './eedit/eedit.component';
import { UploadDirective } from './upload.directive';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { ProgressComponent } from './progress/progress.component';
import { StyleDirective } from './style.directive';
import { GstyleDirective } from './gstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DisplayComponent,
    EquityComponent,
    ShowEquityComponent,
    EditEquityComponent,
    BondComponent,
    ShowBondComponent,
    EditBondComponent,
    DemoComponent,
    BdispComponent,
    BeditComponent,
    EdispComponent,
    EeditComponent,
    UploadDirective,
    UploadDataComponent,
    ProgressComponent,
    StyleDirective,
    GstyleDirective
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

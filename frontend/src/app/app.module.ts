import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContantFilterComponent } from './cmps/contant-filter/contant-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HeaderComponent } from './cmps/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    StaticPageComponent,
    ChartComponent,
    ContantFilterComponent,
    EditContactComponent,
    HeaderComponent,
    SignupComponent,
    TransferFundComponent,
    MoveListComponent,
    MovePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DetailsModule } from './pages/details/details.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    DetailsModule,
  ],
  providers: [ApiService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [DashboardComponent,SafePipe],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers:[SafePipe],
  exports:[SafePipe]
})
export class DashboardModule { }

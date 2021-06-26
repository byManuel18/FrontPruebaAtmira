import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DashboardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers:[SafePipe],
  
})
export class DetailsModule { }

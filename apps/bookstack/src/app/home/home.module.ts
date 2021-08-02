import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [DashboardComponent, TestComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

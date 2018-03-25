import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchpadRoutingModule } from './launchpad-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchpadRoutingModule
  ],
  declarations: [HomeComponent]
})
export class LaunchpadModule { }

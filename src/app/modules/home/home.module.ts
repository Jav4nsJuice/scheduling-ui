import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { CarouselComponent } from './components/sliderSection/carousel/carousel.component';
import { TopStudentsComponent } from './components/topSection/top-students/top-students.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    TopStudentsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

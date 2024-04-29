import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { CarouselComponent } from './components/sliderSection/carousel/carousel.component';
import { TopStudentsComponent } from './components/topSection/top-students/top-students.component';
import { TopCoursesComponent } from './components/topSection/top-courses/top-courses.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    TopStudentsComponent,
    TopCoursesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

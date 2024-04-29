import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  slides = [
    { src: "/tx-scheduling/assets/images/slider/slider1.png" },
    { src: "/tx-scheduling/assets/images/slider/slider2.jpeg" },
    { src: "/tx-scheduling/assets/images/slider/slider3.jpg" }
  ];
  constructor() { }

  ngOnInit(): void {}
}

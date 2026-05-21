import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  activeIndex = 0;

  readonly images = [
    'assets/images/project1.png',
    'assets/images/project2.png',
    'assets/images/project3.png',
    'assets/images/project4.png',
  ];

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  goTo(i: number): void {
    this.activeIndex = i;
  }
}

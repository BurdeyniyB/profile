import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnChanges {
  @Input() folder = '';
  @Input() imagesProp: string[] = [];
  @Input() isHovered = false;

  images: string[] = [];
  activeIndex = 0;

  private readonly basePath = '/images/projects/';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagesProp'] && this.imagesProp) {
      this.images = this.imagesProp.map(
        (name) => `${this.basePath}${this.folder}${name}.png`
      );
      this.activeIndex = 0;
    }
  }

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

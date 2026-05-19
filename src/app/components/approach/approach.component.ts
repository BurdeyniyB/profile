import { Component } from '@angular/core';

@Component({
  selector: 'app-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.css'],
})
export class ApproachComponent {
  hoveredStep: string | null = null;

  setHovered(step: string | null): void {
    this.hoveredStep = step;
  }

  width(step: string, w: number): string {
    return this.hoveredStep === step ? String(w) : '0';
  }

  fill(step: string, active: string, inactive: string): string {
    return this.hoveredStep === step ? active : inactive;
  }

  opacity(step: string): number {
    return this.hoveredStep === step ? 1 : 0;
  }

  dashoffset(step: string): string {
    return this.hoveredStep === step ? '0' : '10';
  }
}

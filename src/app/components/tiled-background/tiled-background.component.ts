import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiled-background',
  templateUrl: './tiled-background.component.html',
  styleUrls: ['./tiled-background.component.css'],
})
export class TiledBackgroundComponent implements OnInit {
  cells: { id: number; src: string }[] = [];

  private readonly logos = [
    'assets/logos/analytics-magnifying-glass.svg',
    'assets/logos/apps-add.svg',
    'assets/logos/browser.svg',
    'assets/logos/code-window.svg',
    'assets/logos/crm-computer.svg',
    'assets/logos/globe.svg',
    'assets/logos/layout-fluid.svg',
    'assets/logos/marketplace.svg',
    'assets/logos/site.svg',
    'assets/logos/worldwide-network.svg',
  ];

  private readonly COLS = 25;
  private readonly ROWS = 20;

  ngOnInit(): void {
    this.cells = Array.from({ length: this.COLS * this.ROWS }, (_, i) => ({
      id: i,
      src: this.logos[Math.floor(Math.random() * this.logos.length)],
    }));
  }
}

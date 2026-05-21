import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @ViewChild('menu') menuRef!: ElementRef<HTMLUListElement>;

  menuOpen = false;

  constructor(readonly config: AppConfigService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;
    if (this.menuRef && !this.menuRef.nativeElement.contains(target)) {
      const navEl = this.menuRef.nativeElement.closest('.nav');
      if (!navEl || !navEl.contains(target)) {
        this.menuOpen = false;
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}

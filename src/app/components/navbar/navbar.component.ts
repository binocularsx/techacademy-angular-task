import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuEntry } from '../../models/nav-link.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly menuEntries: readonly MenuEntry[] = [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' },
  ];

  protected readonly expanded = signal(false);

  readonly menuStateChanged = output<boolean>();

  toggle(): void {
    const next = !this.expanded();
    this.expanded.set(next);
    this.menuStateChanged.emit(next);
  }

  collapse(): void {
    if (!this.expanded()) return;
    this.expanded.set(false);
    this.menuStateChanged.emit(false);
  }
}

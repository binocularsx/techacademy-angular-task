import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly tagline = input.required<string>();
  readonly ctaHint = input.required<string>();
  readonly ctaText = input('Get Started');

  readonly primaryActionFired = output<void>();

  fireAction(): void {
    this.primaryActionFired.emit();
  }
}

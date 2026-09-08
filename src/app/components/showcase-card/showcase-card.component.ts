import { Component, input, output } from '@angular/core';

import { DemoCard } from '../../models/showcase-item.model';

@Component({
  selector: 'app-showcase-card',
  standalone: true,
  templateUrl: './showcase-card.component.html',
  styleUrl: './showcase-card.component.css',
})
export class ShowcaseCardComponent {
  readonly card = input.required<DemoCard>();

  readonly picked = output<DemoCard>();

  raiseSelect(): void {
    this.picked.emit(this.card());
  }
}

import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ShowcaseComponent, ContactComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  scrollToContact(): void {
    document
      .querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

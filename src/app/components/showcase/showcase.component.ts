import { Component, signal } from '@angular/core';

import { ShowcaseCardComponent } from '../showcase-card/showcase-card.component';
import { DemoCard } from '../../models/showcase-item.model';
import { Perk } from '../../models/feature-highlight.model';

const SHOT_BASE = 'https://prium.github.io/Posh/v2.1.0/assets/images/screenshots';
const shot = (name: string) => `${SHOT_BASE}/${name}`;

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [ShowcaseCardComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent {
  protected readonly demoCards: readonly DemoCard[] = [
    { title: 'Landing NOKIA', subtitle: '(Nokia 5)', image: shot('home-landing-nokia.jpg') },
    { title: 'Digital Agency', subtitle: '(Technext, Green Chameleon)', image: shot('home-digital-agency.jpg') },
    { title: 'Travel Agency', subtitle: '(ireland.com)', image: shot('home-travel-agency.jpg') },
    { title: 'Hospital', subtitle: '(Northwestern Medicine, Columbus Regional Health)', image: shot('home-hospital.jpg') },
    { title: 'Education', subtitle: '(American University, Stanford)', image: shot('home-education.jpg') },
    { title: 'Conference', subtitle: '(Chain React)', image: shot('home-conference.jpg') },
    { title: 'Personal', image: shot('home-personal.jpg') },
    { title: 'Hotel', subtitle: '(The Peninsula, Trump Hotels)', image: shot('home-digital-agency.jpg') },
    { title: 'Landing Software', subtitle: '(Skype, Dropbox)', image: shot('home-landing-software-b5.png') },
    { title: 'Shop', subtitle: '(Aliexpress, Sammy Dress)', image: shot('home-shop.jpg') },
    { title: 'Restaurant', subtitle: '(The Smoke Haus, Yung Kee)', image: shot('home-digital-agency.jpg') },
    { title: 'About Team', image: shot('page-about-team.jpg') },
    { title: 'About Company', image: shot('page-about-company.jpg') },
    { title: 'Careers', image: shot('page-careers.jpg') },
    { title: 'Contact 1', image: shot('page-contact-1.jpg') },
    { title: 'Contact 2', image: shot('page-contact-2.jpg') },
    { title: 'Contact 3', image: shot('page-contact-3.jpg') },
    { title: 'Pricing 1', image: shot('page-pricing-1.jpg') },
    { title: 'Pricing 2', image: shot('page-pricing-2.jpg') },
    { title: 'Services 1', image: shot('page-services-1.jpg') },
    { title: 'Services 2', image: shot('page-services-2.jpg') },
    { title: 'Services 3', image: shot('page-services-3.jpg') },
    { title: 'Log in (Simple)', image: shot('page-log-in.jpg') },
    { title: 'Log in (With Social)', image: shot('page-log-in-social.jpg') },
    { title: 'Account Recovery', image: shot('page-recovery.jpg') },
    { title: 'Profile', image: shot('page-profile.jpg') },
    { title: 'Settings', image: shot('page-settings.jpg') },
    { title: 'Maintenance', image: shot('page-maintenance.jpg') },
    { title: 'Products List', image: shot('shop-products-list.jpg') },
    { title: 'Products Grid', image: shot('shop-products-grid.jpg') },
    { title: 'Product Details', image: shot('shop-product-details.jpg') },
    { title: 'Cart', image: shot('shop-cart.jpg') },
    { title: 'List Title Inside', image: shot('portfolio-1.jpg') },
    { title: 'List Title Outside', image: shot('portfolio-2.jpg') },
    { title: 'List Title Hover', image: shot('portfolio-3.jpg') },
    { title: 'Portfolio Details', image: shot('portfolio-details.jpg') },
    { title: 'Case Study', image: shot('portfolio-case-study.jpg') },
    { title: 'Blog List', image: shot('blog-list.jpg') },
    { title: 'Article', image: shot('blog-article.jpg') },
  ];

  protected readonly perks: readonly Perk[] = [
    { mark: '✅', copy: 'No design experience needed' },
    { mark: '✅', copy: 'Free lifetime updates' },
    { mark: '✅', copy: '24/7 support' },
    { mark: '✅', copy: 'Money-back guarantee' },
  ];

  protected readonly chosenCard = signal<DemoCard | null>(null);

  pickCard(card: DemoCard): void {
    this.chosenCard.set(card);
  }
}

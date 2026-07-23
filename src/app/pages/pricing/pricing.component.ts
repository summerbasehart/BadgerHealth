import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { PriceComponent } from '../../components/price/price.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FaqComponent,
    PriceComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}

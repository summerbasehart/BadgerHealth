import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-cta-two',
  standalone: true,
      imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './cta-two.component.html',
  styleUrl: './cta-two.component.scss'
})
export class CtaTwoComponent {



}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ServicesComponent } from '../../components/services/services.component';
import { AboutOneComponent } from '../../components/about-one/about-one.component';
import { AboutTwoComponent } from '../../components/about-two/about-two.component';
import { ClientComponent } from '../../components/client/client.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';
import { CtaComponent } from "../../components/cta/cta.component";
import { AvailabilityComponent } from "../../components/availability/availability.component";
import { CtaTwoComponent } from "../../components/cta-two/cta-two.component";
import { TeamComponent } from "../../components/team/team.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ServicesComponent,
    AboutOneComponent,
    AboutTwoComponent,
    ClientComponent,
    BlogComponent,
    FooterComponent,
    ScrollToTopComponent,
    HomeBannerComponent,
    CtaComponent,
    AvailabilityComponent,
    CtaTwoComponent,
    TeamComponent
],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}

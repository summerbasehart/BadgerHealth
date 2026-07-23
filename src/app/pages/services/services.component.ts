import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { TeamComponent } from '../../components/team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CtaComponent,
    TeamComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
   {
    image:'assets/images/service/cardiology.svg',
    title:'Cardiology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/neurology.svg',
    title:'Neurology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/orthopaedic.svg',
    title:'Orthopaedic',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/gynecology.svg',
    title:'Gynecology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/dermatology.svg',
    title:'Dermatology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/urology.svg',
    title:'Urology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/nephrology.svg',
    title:'Neurosurgery',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/radiology.svg',
    title:'Radiology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/neonatology.svg',
    title:'Neonatology',
    desc:'Success needs hard work & quality work.'
   },
   {
    image:'assets/images/service/dentistry.svg',
    title:'Dentistry',
    desc:'Success needs hard work & quality work.'
   },
  ]
}

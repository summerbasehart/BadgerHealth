import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
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
  ]
}

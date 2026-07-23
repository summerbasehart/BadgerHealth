import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import Swiper from 'swiper';
import { Autoplay, EffectFade} from 'swiper/modules';
import { register } from 'swiper/element';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {

  swiper!: Swiper;
  constructor(){
    register()
  }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Autoplay, EffectFade],
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed:5000,
      loop:true,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}

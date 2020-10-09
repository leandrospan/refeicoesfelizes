import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  sliderConfig = {
    slidesPerView: 3.2,
    spaceBetween: 1,
    initialSlide: 0,
    speed: 400
  };

  sliderConfig2 = {
    slidesPerView: 1.2,
    spaceBetween: 1,
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}

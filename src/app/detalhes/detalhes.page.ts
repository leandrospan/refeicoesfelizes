import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    initialSlide: 0,
    speed: 400
  }

  constructor() { }

  ngOnInit() {
  }

}

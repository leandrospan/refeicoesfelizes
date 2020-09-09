import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentaslide',
  templateUrl: './apresentaslide.page.html',
  styleUrls: ['./apresentaslide.page.scss'],
})
export class ApresentaslidePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}

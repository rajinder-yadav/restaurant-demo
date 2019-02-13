import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ry-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'About';

  constructor() { }

  ngOnInit() {
  }

}

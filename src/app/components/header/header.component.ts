import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ry-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}

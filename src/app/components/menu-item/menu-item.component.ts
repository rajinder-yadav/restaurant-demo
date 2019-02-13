import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../data/data.menu-item';

@Component({
  selector: 'ry-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}

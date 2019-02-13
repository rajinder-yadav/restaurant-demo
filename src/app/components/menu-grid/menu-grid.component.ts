import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../data/data.menu-item';
import { DAILYMENU } from '../../data/menu.mock.data';

@Component({
  selector: 'ry-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.scss']
})
export class MenuGridComponent implements OnInit {

  menu: MenuItem[] = DAILYMENU;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Topic } from '../../data/data.topics';
import { TOPICS } from '../../data/topic.mock.data';

@Component({
  selector: 'ry-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly topics: Topic[] = TOPICS;

  title = 'Ristorante Il Fornello';

  text = 'Simple, fresh ingredients, prepared and cooked with love and \
    passion become truly great dishes, from wood-oven baked Neapolitan \
    style pizzas to pastas, entrees!';

  constructor() { }

  ngOnInit() {
  }

}

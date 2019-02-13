import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ry-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() text: string;
  @Input() caption: string;

  @Input() flow = 'ltr';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { ISceneComponent } from '../../../stage/iscene.component';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
  animations: [
    trigger('someCoolAnimation', [
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => fadeOut', [animate(1000, style({ opacity: 0 }))])
    ])
  ]
})
export class Day1Component implements ISceneComponent {
  @Input() data: any;
  bindingVar = '';
  constructor() {}

  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
}

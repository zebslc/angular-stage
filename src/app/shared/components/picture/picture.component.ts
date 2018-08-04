import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../../model/image';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() ImageToDisplay: IImage;

  constructor() {}

  ngOnInit() {}
}

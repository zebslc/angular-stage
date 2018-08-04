import { Type } from '@angular/core';

export interface ISceneItem {
  key: string;
  component: Type<any>;
  data: any;
  tags: string[];
  sizes: string[];
}

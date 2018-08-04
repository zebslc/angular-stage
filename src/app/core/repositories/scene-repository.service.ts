import { Injectable } from '@angular/core';
import { ISceneItem } from '../../shared/model/scene-item';
import { Day1Component } from '../../shared/components/scenes/desktop/day/day1.component';

@Injectable({
  providedIn: 'root'
})
export class SceneRepositoryService {
  constructor() {}

  getAllScenes(): ISceneItem[] {
    return [
      {
        key: 'mob1',
        component: Day1Component,
        data: { title: 'mobile page 1' },
        tags: ['home'],
        sizes: ['xs', 'sm']
      },
      {
        key: 'desk1',
        component: Day1Component,
        data: { title: 'desktop page 1' },
        tags: ['home'],
        sizes: ['md', 'lg', 'xl']
      },
      {
        key: 'desk2',
        component: Day1Component,
        data: { title: 'desktop page 2' },
        tags: ['home'],
        sizes: ['md', 'lg', 'xl']
      }
    ];
  }
}

import { Injectable } from '@angular/core';
import { ISceneItem } from '../../shared/model/scene-item';
import { SceneRepositoryService } from '../repositories/scene-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  availableSceneList: ISceneItem[];

  constructor(private sceneRepository: SceneRepositoryService) {
    this.availableSceneList = this.sceneRepository.getAllScenes();
  }

  getScenes(tags: string[], size: string): ISceneItem[] {
    if (
      !this.isPopulatedArray(tags) ||
      !this.isPopulatedArray(this.availableSceneList)
    ) {
      return;
    }

    const scenesFound = this.getScenesForSize(this.availableSceneList, size);

    return this.getScenesForTags(tags, scenesFound);
  }

  private isPopulatedArray(arrayToTest: any[]) {
    return Array.isArray(arrayToTest) && arrayToTest.length;
  }

  private getScenesForSize(
    itemsToSearch: ISceneItem[],
    size: string
  ): ISceneItem[] {
    const itemsFound: ISceneItem[] = [];
    itemsToSearch.map((scene: ISceneItem) => {
      if (scene.sizes.some(arrVal => size === arrVal)) {
        itemsFound.push(scene);
      }
    });
    return itemsFound;
  }

  private getScenesForTags(
    tags: string[],
    sizedScenes: ISceneItem[]
  ): ISceneItem[] {
    if (!this.isPopulatedArray(sizedScenes)) {
      return;
    }

    const foundList: ISceneItem[] = [];
    sizedScenes.forEach(scene => {
      tags.forEach(tag => {
        if (scene.tags.some(stag => stag === tag)) {
          foundList.push(scene);
        }
      });
    });
    return foundList;
  }
}

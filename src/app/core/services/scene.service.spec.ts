import { Injectable } from '@angular/core';
import { SceneService } from './scene.service';
import { test_scene_data } from '../mocks/test_scene_data';
import { ISceneItem } from '../../shared/model/scene-item';
// import { SceneRepositoryService } from '../repositories/scene-repository.service';

describe('SceneService', () => {
  let sceneService: SceneService;

  it('should be created', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    expect(sceneService).toBeTruthy();
  });

  it('should get the one xl home scene', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    const scenes: ISceneItem[] = sceneService.getScenes(['home'], 'xl');
    expect(scenes.length).toEqual(1);
  });

  it('should get the three md home scene', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    const scenes: ISceneItem[] = sceneService.getScenes(['home'], 'md');
    expect(scenes.length).toEqual(3);
  });

  it('should handle nothing found', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    const scenes: ISceneItem[] = sceneService.getScenes(['xxx'], 'md');
    expect(scenes.length).toBe(0);
  });

  it('should fail with no size', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    const scenes: ISceneItem[] = sceneService.getScenes(['xxx'], null);
    expect(scenes).toBeUndefined();
  });

  it('should fail with no tags', () => {
    sceneService = new SceneService(new SceneRepositoryService());
    const scenes: ISceneItem[] = sceneService.getScenes(null, 'xx');
    expect(scenes).toBeUndefined();
  });
});

@Injectable()
export class SceneRepositoryService {
  getAllScenes(): ISceneItem[] {
    return [
      test_scene_data.testData.mobile1,
      test_scene_data.testData.desk1,
      test_scene_data.testData.desk2,
      test_scene_data.testData.desk3
    ];
  }
  constructor() {}
}

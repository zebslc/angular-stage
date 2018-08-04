import { TestBed, inject } from '@angular/core/testing';

import { SceneRepositoryService } from './scene-repository.service';
import { ISceneItem } from '../../shared/model/scene-item';

describe('SceneRepositoryService', () => {
  let sceneRepositoryService: SceneRepositoryService;

  it('should be created', () => {
    sceneRepositoryService = new SceneRepositoryService();
    expect(sceneRepositoryService).toBeTruthy();
  });

  it('should return a list of scenes', () => {
    sceneRepositoryService = new SceneRepositoryService();
    const scenes: ISceneItem[] = sceneRepositoryService.getAllScenes();
    expect(scenes.length).toEqual(3);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneRepositoryService]
    });
  });

  it('should be created', inject(
    [SceneRepositoryService],
    (service: SceneRepositoryService) => {
      expect(service).toBeTruthy();
    }
  ));
});

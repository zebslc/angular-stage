import {
  Component,
  ComponentFactoryResolver,
  Input,
  Injectable
} from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveSizeInfoRx } from 'ngx-responsive';
import { Subscription } from 'rxjs';

import { ISceneItem } from '../../model/scene-item';
import { ISceneComponent } from './iscene.component';

import { StageComponent } from './stage.component';

@Component({
  selector: 'app-dummy',
  template: ''
})
class DummyComponent implements ISceneComponent {
  @Input() data: any;
  constructor() {}
}

describe('StageComponent', () => {
  const scene1: ISceneItem = {
    key: 'mob1',
    component: DummyComponent,
    data: { title: 'mobile page 1' },
    tags: ['home'],
    sizes: ['xs', 'sm']
  };
  let componentFactoryResolverSpy;
  this.sceneItems = [scene1];
  componentFactoryResolverSpy = jasmine.createSpyObj(
    'ComponentFactoryResolver',
    ['resolveComponentFactory']
  );

  const responsiveSizeInfoRxSpy = jasmine.createSpyObj('ResponsiveSizeInfoRx', [
    'getResponsiveSize.subscribe',
    'connect',
    'disconnect'
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StageComponent, DummyComponent],
      imports: [],
      providers: [
        Subscription,
        {
          provide: ComponentFactoryResolver,
          useValue: componentFactoryResolverSpy
        },
        {
          provide: ResponsiveSizeInfoRx,
          useValue: responsiveSizeInfoRxSpy
        },
        SceneService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    this.fixture = TestBed.createComponent(StageComponent);
    this.component = this.fixture.componentInstance;
    this.component.scenes = this.sceneItems;
    this.fixture.detectChanges();
  });

  // it('should create', () => {
  //   const fixture = TestBed.createComponent(StageComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
});

@Injectable()
export class SceneService {
  getScenes(tags: string[], size: string): ISceneItem[] {
    return [];
  }
  constructor() {}
}

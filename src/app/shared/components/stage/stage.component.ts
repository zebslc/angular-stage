import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';
import { ResponsiveSizeInfoRx } from 'ngx-responsive';
import { Subscription } from 'rxjs';

import { StageDirective } from './stage.directive';
import { ISceneItem } from '../../model/scene-item';
import { ISceneComponent } from './iscene.component';
import { SceneService } from '../../../core/services/scene.service';

@Component({
  selector: 'app-stage',
  template: `
      <ng-template appStage></ng-template>
 `
})
export class StageComponent implements OnInit, OnDestroy {
  @ViewChild(StageDirective) sceneHost: StageDirective;
  @Input() tags: string[];
  currentSceneIndex = -1;
  private interval: any;
  private _subscriptions: Subscription[] = [];
  private scenes: ISceneItem[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sceneService: SceneService,
    public responsiveSizeInfoRx: ResponsiveSizeInfoRx
  ) {}

  ngOnInit() {
    this._subscribe();
    this.responsiveSizeInfoRx.connect();

    this.loadComponent();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this._unsubscribe();
    this.responsiveSizeInfoRx.disconnect();
  }

  private _subscribe(): void {
    this._subscriptions.push(
      this.responsiveSizeInfoRx.getResponsiveSize.subscribe(
        bssize => {
          if (this.isPopulatedArray(this.tags)) {
            this.scenes = this.sceneService.getScenes(this.tags, bssize);
            this.currentSceneIndex = 0;
            this.loadComponent();

            if (this.scenes.length <= 1) {
              clearTimeout(this.interval);
            } else {
              this.showTimedScenes();
            }
          }
        },
        err => {
          console.log('Error', err);
        }
      )
    );
  }
  private _unsubscribe(): void {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  private loadComponent() {
    if (!this.isPopulatedArray(this.scenes)) {
      return;
    }
    this.currentSceneIndex = (this.currentSceneIndex + 1) % this.scenes.length;
    const sceneItem = this.scenes[this.currentSceneIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      sceneItem.component
    );

    const viewContainerRef = this.sceneHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ISceneComponent>componentRef.instance).data = sceneItem.data;
  }

  private showTimedScenes() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 15000);
  }

  private isPopulatedArray(arrayToTest: any[]) {
    return Array.isArray(arrayToTest) && arrayToTest.length;
  }
}

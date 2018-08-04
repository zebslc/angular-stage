import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from '../../node_modules/ngx-responsive';

import { Day1Component } from './shared/components/scenes/desktop/day/day1.component';
import { PictureComponent } from './shared/components/picture/picture.component';
import { StageComponent } from './shared/components/stage/stage.component';
import { SceneService } from './core/services/scene.service';
import { StageDirective } from './shared/components/stage/stage.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    PictureComponent,
    StageComponent,
    StageDirective
  ],
  imports: [BrowserAnimationsModule, BrowserModule, ResponsiveModule.forRoot()],
  entryComponents: [Day1Component],
  providers: [SceneService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveModule } from '../../node_modules/ngx-responsive';
import { Subscription } from 'rxjs';

import { PictureComponent } from './shared/components/picture/picture.component';
import { StageComponent } from './shared/components/stage/stage.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PictureComponent, StageComponent],
      imports: [BrowserAnimationsModule, ResponsiveModule.forRoot()]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

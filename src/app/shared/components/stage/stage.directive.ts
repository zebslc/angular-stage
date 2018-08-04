import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStage]'
})
export class StageDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

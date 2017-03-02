import {
  Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,  ContentChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ContentChild('boundContent')
  boundContent : HTMLElement;

  ngOnChanges(){
    this.log("onChanges");
  }

  ngOnInit() {
    this.log("onInit");
  }

  ngDoCheck(){
    this.log("doCheck");
  }

  ngAfterContentInit(){
    this.log("afterContentInit");
  }

  ngAfterContentChecked(){
    this.log("afterContentChecked");
    console.log(this.boundContent);
  }

  ngAfterViewInit(){
    this.log("AfterViewInit");
  }

  ngAfterViewChecked(){
    this.log("AfterViewChecked");
  }

  ngOnDestroy(){
    this.log("onDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }

}

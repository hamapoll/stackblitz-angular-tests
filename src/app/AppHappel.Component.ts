import { Component, Input, OnInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'my-app-happel',
  template: '{{HappelName}}',
  styleUrls: ['./app.component.css']
})
export class AppHappelComponent implements OnInit {
  @Input()
  HappelName: string;

  ngOnInit() {
    console.log ( 'OnInit Happel');
  }
}
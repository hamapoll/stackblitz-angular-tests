import { Component, Input, OnInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked {

  @Input()
  Name: String = 'Mohamed'

  @Input()
  Happeln: Array<String> = [ 'Richi', 'Krzysztof', 'Christian' ];

  ngOnInit() {
    console.log ( 'OnInit');
  }

  ngAfterViewInit() {
    console.log ( 'AfterViewInit');
  }

  ngOnChanges() {
    console.log ( 'OnChanges' );
  }
  
  ngDoCheck() {
    console.log ( 'DoCheck' );
  }

  ngAfterViewChecked() {
    console.log ( 'DoCAfterViewChecked' );
  }
}

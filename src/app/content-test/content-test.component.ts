import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-content-test',
  templateUrl: './content-test.component.html',
  styleUrls: ['./content-test.component.scss'],
})
export class ContentTestComponent
  implements AfterViewInit, AfterContentInit, OnInit
{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('myContent') content!: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit - wrapper', this.wrapper);
    console.log('ngOnInit - content', this.content);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
    console.log('ngAfterViewInit - content', this.content);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - content', this.content);
  }
}

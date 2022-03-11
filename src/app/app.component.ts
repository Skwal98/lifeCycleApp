import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifyService } from './notify-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  constructor(private _cd: ChangeDetectorRef, public notify: NotifyService) {
    this.notify.log('APP constructor() invoked');
  }

  ngOnInit(): void {
    this.notify.log('APP ngOnInit() invoked');
  }

  ngAfterContentInit(): void {
    this.notify.log('APP ngAfterContentInit() invoked');
  }

  ngAfterViewInit(): void {
    this.notify.log('APP ngAfterViewInit() invoked');
    this._cd.detectChanges();
  }

  i = false;
  get testGetter(): number {
    if (this.i === false) {
      this.i = true;

      this.notify.log('APP getter from template invoked');
    }

    return 3;
  }
}

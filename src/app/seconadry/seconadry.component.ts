import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NotifyService } from '../notify-service';

@Component({
  selector: 'app-seconadry',
  templateUrl: './seconadry.component.html',
  styleUrls: ['./seconadry.component.scss'],
})
export class SeconadryComponent implements OnInit {
  @Input() set val(k: number) {
    this.notify.log('SECOND setter invoked');
  }

  constructor(private _cd: ChangeDetectorRef, public notify: NotifyService) {
    this.notify.log('SECOND constructor() invoked');
  }

  ngOnInit(): void {
    this.notify.log('SECOND ngOnInit() invoked');
  }

  ngAfterContentInit(): void {
    this.notify.log('SECOND ngAfterContentInit() invoked');
  }

  ngAfterViewInit(): void {
    this.notify.log('SECOND ngAfterViewInit() invoked');
    this._cd.detectChanges();
  }

  i = false;
  get testGetter(): number {
    if (this.i === false) {
      this.i = true;

      this.notify.log('SECOND getter from template invoked');
    }

    return 3;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconadryComponent } from './seconadry.component';

describe('SeconadryComponent', () => {
  let component: SeconadryComponent;
  let fixture: ComponentFixture<SeconadryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconadryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconadryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

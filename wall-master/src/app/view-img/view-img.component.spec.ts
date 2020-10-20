import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImgComponent } from './view-img.component';

describe('ViewImgComponent', () => {
  let component: ViewImgComponent;
  let fixture: ComponentFixture<ViewImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

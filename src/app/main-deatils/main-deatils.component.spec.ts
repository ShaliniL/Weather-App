import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeatilsComponent } from './main-deatils.component';

describe('MainDeatilsComponent', () => {
  let component: MainDeatilsComponent;
  let fixture: ComponentFixture<MainDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGridComponent } from './menu-grid.component';

describe('MenuGridComponent', () => {
  let component: MenuGridComponent;
  let fixture: ComponentFixture<MenuGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

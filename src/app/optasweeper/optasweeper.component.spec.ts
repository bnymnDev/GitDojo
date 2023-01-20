import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptasweeperComponent } from './optasweeper.component';

describe('OptasweeperComponent', () => {
  let component: OptasweeperComponent;
  let fixture: ComponentFixture<OptasweeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptasweeperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptasweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

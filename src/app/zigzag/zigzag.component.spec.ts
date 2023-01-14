import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigzagComponent } from './zigzag.component';

describe('DojoComponent', () => {
  let component: ZigzagComponent;
  let fixture: ComponentFixture<ZigzagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZigzagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigzagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

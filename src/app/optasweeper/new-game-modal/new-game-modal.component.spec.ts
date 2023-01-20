import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameModalComponent } from './new-game-modal.component';

describe('NewGameModalComponent', () => {
  let component: NewGameModalComponent;
  let fixture: ComponentFixture<NewGameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

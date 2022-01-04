import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverableTextComponent } from './hoverable-text.component';

describe('HoverableTextComponent', () => {
  let component: HoverableTextComponent;
  let fixture: ComponentFixture<HoverableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverableTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

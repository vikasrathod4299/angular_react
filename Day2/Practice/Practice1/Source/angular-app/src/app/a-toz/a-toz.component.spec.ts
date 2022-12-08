import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATozComponent } from './a-toz.component';

describe('ATozComponent', () => {
  let component: ATozComponent;
  let fixture: ComponentFixture<ATozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

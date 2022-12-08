import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareaComponent } from './rarea.component';

describe('RareaComponent', () => {
  let component: RareaComponent;
  let fixture: ComponentFixture<RareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

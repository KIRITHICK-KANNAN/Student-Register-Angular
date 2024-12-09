import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFormComponent } from './next-form.component';

describe('NextFormComponent', () => {
  let component: NextFormComponent;
  let fixture: ComponentFixture<NextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

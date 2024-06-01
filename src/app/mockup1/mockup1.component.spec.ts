import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mockup1Component } from './mockup1.component';

describe('Mockup1Component', () => {
  let component: Mockup1Component;
  let fixture: ComponentFixture<Mockup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mockup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mockup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

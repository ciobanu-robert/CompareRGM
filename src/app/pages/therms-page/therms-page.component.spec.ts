import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermsPageComponent } from './therms-page.component';

describe('ThermsPageComponent', () => {
  let component: ThermsPageComponent;
  let fixture: ComponentFixture<ThermsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThermsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

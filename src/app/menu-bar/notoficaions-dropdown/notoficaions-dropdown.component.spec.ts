import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotoficaionsDropdownComponent } from './notoficaions-dropdown.component';

describe('NotoficaionsDropdownComponent', () => {
  let component: NotoficaionsDropdownComponent;
  let fixture: ComponentFixture<NotoficaionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotoficaionsDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotoficaionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

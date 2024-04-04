import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSettingsPageComponent } from './products-settings-page.component';

describe('ProductsSettingsPageComponent', () => {
  let component: ProductsSettingsPageComponent;
  let fixture: ComponentFixture<ProductsSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSettingsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

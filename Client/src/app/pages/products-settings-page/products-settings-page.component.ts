import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-settings-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    InputComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './products-settings-page.component.html',
  styleUrl: './products-settings-page.component.css'
})
export class ProductsSettingsPageComponent {
  visible = false;
  error = {
    name: false,
    category: false,
    price: false,
  };

  products: IProduct[] = [];
  credentials: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };

  addNewProduct() {
    this.visible = true;
    this.credentials = {
      productID: 0,
      name: '',
      category: '',
      price: 0,
      size: 0,
      quantity: 0,
    };
  }

  cancel() {
    this.visible = false;
    this.error = {
      name: false,
      category: false,
      price: false,
    };
    this.credentials = {
      productID: 0,
      name: '',
      category: '',
      price: 0,
      size: 0,
      quantity: 0,
    };  
  }

  confirm() {
    if (!this.credentials.name) {
      this.error.name = true;
    } else if (!this.credentials.category) {
      this.error.category = true;
      this.error.name = false;
    } else if (this.credentials.price <= 0) {
      this.error.price = true;
      this.error.category = false;
      this.error.name = false;
    } else {
      this.credentials.productID = this.products.length;
      this.products.push(this.credentials);
      this.visible = false;
      this.error = {
        name: false,
        category: false,
        price: false,
      };
      this.credentials = {
        productID: 0,
        name: '',
        category: '',
        price: 0,
        size: 0,
        quantity: 0,
      };
    }
  }

  delete(id: number) {
    this.products.forEach((product, index) => {
      if (product.productID === id) [
          this.products.splice(index, 1)
      ]
    });
  }
}

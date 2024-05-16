import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import readXlsxFile from 'read-excel-file';
import { SearchService } from '../../services/search.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { StatisticsService } from '../../services/statistics.service';

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
    FilterPipe,
  ],
  templateUrl: './products-settings-page.component.html',
  styleUrl: './products-settings-page.component.css'
})
export class ProductsSettingsPageComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private search: SearchService,
    private statistics: StatisticsService,
  ) {
    this.search.getSearchText.subscribe(text => this.searchText = text);
  }

  searchText = '';
  visible = false;
  error = {
    name: false,
    category: false,
    price: false,
  };

  exel: any;
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

  async importXlsx(event: any) {
    const schema: any = {
      'Name': {
        prop: 'name',
        type: String,
        required: true,
      },
      'Category': {
        prop: 'category',
        type: String,
        required: true,
      },
      'Price': {
        prop: 'price',
        type: Number,
        required: true,
      },
      'Size': {
        prop: 'size',
        type: Number,
      },
      'Quantity': {
        prop: 'quantity',
        type: Number,
      },
    };

    const file = event.target.files[0];
    const data = await readXlsxFile(file, { schema });

    if (data.errors.length === 0) {
      this.exel = data.rows;
      let i = 0;
      for (let product of this.exel) {
        product['productID'] = this.products.length + i;
        i++;
      }
      this.products.push(...this.exel);
    }
  }

  async save() {
    await this.statistics.postProducts(this.products.length);
    await this.productsService.save(this.products);
  }


  async ngOnInit() {
    this.products = await this.productsService.getProducts();
  }
}

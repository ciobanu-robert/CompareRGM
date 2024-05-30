import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { TopbarComponent } from '../../menu-bar/topbar/topbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { IProduct } from '../../interfaces/product.interface';
import { SearchService } from '../../services/search.service';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [
    CommonModule,
    TopbarComponent,
    RouterLink,
    RouterLinkActive,
    FilterPipe,
  ],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css'
})
export class AdminUserComponent implements OnInit{
  constructor(
    private userService: UserService,
    private search: SearchService,
    private excel: ExcelService,
  ) {
    this.search.getSearchText.subscribe(text => this.searchText = text);
  }

  searchText = '';

  user: IUser = {
    _id: '',
    profileImage: '',
    email: '',
    company: '',
    admin: false,
    banned: false,
    products: [],
  };

  download() {
    const downloadUserProducts: any = this.user.products;

    for (let product of downloadUserProducts) {
      delete product._id;
    }

    this.excel.exportAsExcelFile(downloadUserProducts, `${this.user.company}_${this.user._id}`)
  }

  delete(id: number) {
    this.user.products?.forEach((product, index) => {
      if (product.productID === id) [
          this.user.products?.splice(index, 1)
      ]
    });
  }

  async save() {
    await fetch('/api/admin/save-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.user._id,
        products: this.user.products,
        productsNumber: this.user.products?.length,
      })
    }).then((res) => res.json());
  }

  ngOnInit() {
    this.userService.getUser.subscribe(user => this.user = user);
  }
}

import { ProductService } from './../../data-acces/products.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductService],
})
export default class ProductListComponent {}

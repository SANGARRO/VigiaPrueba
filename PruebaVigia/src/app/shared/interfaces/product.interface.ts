import { AppComponent } from './../../app.component';
import { ProductDetailComponent } from './../../products/features/product-detail/product-detail.component';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './products.service';
import { Product } from './../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';

interface State {
  products: Product[];
  status: 'loading' | 'succes' | 'error';
}
@Injectable()
export class ProductStateService {
  private ProductService = inject(ProductService);
  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };
  state = signalSlice({
    initialState: this.initialState,
    sources: [],
  });
  constructor() {
    this.state.Products();
  }
}

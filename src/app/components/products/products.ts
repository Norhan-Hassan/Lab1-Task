import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  store: Store;
  clientName = 'Norhan';

  constructor() {
    this.store = new Store('store1', ['Cairo Branch', 'Alex Branch'], 'assets/store.jpeg');
  }
}

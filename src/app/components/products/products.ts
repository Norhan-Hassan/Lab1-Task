import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  store: Store;
  clientName = 'Norhan';
  searchTerm: string = '';
  selectedCategory: number = 0;

  constructor() {
    this.store = new Store('store1', ['Cairo Branch', 'Alex Branch'], 'assets/store.jpeg');
  }
  categories: ICategory[] = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Shoes' },
  ];

  products: IProduct[] = [
    {
      id: 1,
      name: 'T-Shirt',
      quantity: 5,
      price: 200,
      img: 'https://placehold.co/600x400',
      categoryID: 1,
    },
    {
      id: 2,
      name: 'Jeans',
      quantity: 2,
      price: 400,
      img: 'https://placehold.co/600x400',
      categoryID: 1,
    },
    {
      id: 3,
      name: 'Necklace',
      quantity: 0,
      price: 150,
      img: 'https://placehold.co/600x400',
      categoryID: 2,
    },
    {
      id: 4,
      name: 'Sneakers',
      quantity: 10,
      price: 600,
      img: 'https://placehold.co/600x400',
      categoryID: 3,
    },
  ];

  buy(product: IProduct) {
    if (product.quantity >= 2) {
      product.quantity -= 2;
    }
  }

  showDetails(product: IProduct) {
    alert(`
      Product: ${product.name}
      Price: ${product.price}
      Quantity: ${product.quantity}
    `);
  }
  get filteredProducts() {
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory == 0 || p.categoryID == this.selectedCategory)
    );
  }
  getQuantityStatus(qty: number): string {
    switch (qty) {
      case 0:
        return 'Out of stock';
      case 1:
        return 'Last one item';
      case 2:
        return 'Last two items';
      default:
        return 'In stock';
    }
  }
}

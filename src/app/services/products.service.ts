import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { CartProduct } from '../model/CartProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productArr: CartProduct[] = [{
    id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      items: 3
  },
  {
    "id": 2,
    "name": "Headphones",
    "price": 249.99,
    "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "description": "Listen to stuff!",
    items: 4
  }]

  constructor(private http: HttpClient) { }

  getProductsFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json')
  }

  getProductFromCart(): CartProduct[] {
    return this.productArr
  }

  addProductsToCart(product: CartProduct): void {
    if (this.productArr.length) {
      let count = 0
      this.productArr.forEach(p => {
        p.id == product.id ? p.items += product.items : count += 1
      })
      if (count == this.productArr.length) {
        this.productArr.push(product)
      }
    } else {
      this.productArr.push(product)
    }
  }

  alterProductsInCart(product: CartProduct): CartProduct[] {
    if (this.productArr.length) {
      this.productArr.forEach(p => {
        if (p.id == product.id) {
          p.items = product.items
        }
      })
      return this.productArr
    } else {
      return []
    }
  }

  deleteProductsFromCart(product: CartProduct): CartProduct[] {
    if (this.productArr.length) {
          this.productArr = this.productArr.filter(p => {
            return p.id !== product.id
        })
      return this.productArr
    } else {
      return []
    }
  }

}

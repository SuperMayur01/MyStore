import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { CartProduct } from '../model/CartProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productArr: CartProduct[] = []

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

  clearCart(){
    this.productArr = []
  }

}

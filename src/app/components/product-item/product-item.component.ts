import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartProduct } from 'src/app/model/CartProduct';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product 
  @Output() updateCartItems: EventEmitter<CartProduct> = new EventEmitter();
  noOfItems: string = "1"
  // cartItems: number = 0


  constructor() {
    this.product = {
      id : 0,
      name : "",
      price : 0,
      url : "",
      description : ""
    }
   }

  ngOnInit(): void {
  }

  addToCart(product:Product) : void{
    const cartProduct: CartProduct = {...product, items:0}
    cartProduct["items"] = parseInt(this.noOfItems);
    this.updateCartItems.emit(cartProduct)
    alert(`${cartProduct.name} has/have been added to cart`)
  }

  
}

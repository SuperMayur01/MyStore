import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/model/CartProduct';
import { OrderDetails } from 'src/app/model/OrderDetails';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name: string = "";
  address: string = "";
  creditcard: string = "";
  cartProductList: CartProduct[] = [];
  total: string = ""

  formFieldErrors = {
    name: "",
    address: "",
    card: ""
  }

  constructor(private productsService: ProductsService, private orderService: OrderService, private router: Router) {

  }

  ngOnInit(): void {
    this.cartProductList = this.productsService.getProductFromCart()
  }

  validateName() {
    if (this.name.length < 3) {
      this.formFieldErrors.name = "Please provide a valid name"
    } else {
      this.formFieldErrors.name = ""
    }
  }

  validateAddress() {
    if (this.address.length < 6) {
      this.formFieldErrors.address = "Please provide a valid address"
    } else {
      this.formFieldErrors.address = ""
    }
  }

  validateCardNo() {
    if (this.creditcard.length < 16 || this.creditcard.length > 16 || isNaN(Number(this.creditcard))) {
      this.formFieldErrors.card = "Please provide a valid card number"
    } else {
      this.formFieldErrors.card = ""
    }
  }

  submitForm(e: Event): void {
    e.preventDefault();
    const customerDetails: OrderDetails = {
      name: this.name,
      address: this.address,
      creditcard: this.creditcard,
      orderedProducts: this.cartProductList,
      total: this.total
    }
    if (this.cartProductList.length) {
      this.orderService.setOrderDetails(customerDetails)
    }

    this.name = "";
    this.address = "";
    this.creditcard = "";
    this.cartProductList = [];
    this.total = ""

    this.router.navigate(['/order/success']);
    this.productsService.clearCart();

  }

  removeItem(cartProduct: CartProduct): void {
    this.cartProductList = this.productsService.deleteProductsFromCart(cartProduct)
    alert(`${cartProduct.name} has/have been removed from cart.`)
  }

  updateCartProduct(event: any, cartProduct: CartProduct): void {
    this.cartProductList = this.productsService.alterProductsInCart({ ...cartProduct, items: parseInt(event.target.value) })
  }

  totalValueInCart(): string {
    let value: number = 0
    this.cartProductList.length ? this.cartProductList.forEach(p => {
      value = value + (p.price * p.items)
    }) : value = 0

    this.total = value.toFixed(2)

    return this.total
  }

}

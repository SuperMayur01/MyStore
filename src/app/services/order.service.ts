import { Injectable } from '@angular/core';
import { OrderDetails } from '../model/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderDetails: OrderDetails = {
    name: "",
    address: "",
    creditcard: "",
    orderedProducts: [],
    total:""
  }

  constructor() { }

  getOrderDetails(): OrderDetails {
    return this.orderDetails
  }

  setOrderDetails(orderObject:OrderDetails): void {
    this.orderDetails = orderObject
  }

}

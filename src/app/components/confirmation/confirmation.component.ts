import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/model/OrderDetails';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderDetails:OrderDetails = {
    name: "",
    address: "",
    creditcard: "",
    orderedProducts: [],
    total: ""
  }

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderDetails = this.orderService.getOrderDetails()
  }

}

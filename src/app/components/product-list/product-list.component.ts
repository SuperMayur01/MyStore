import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/CartProduct';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsFromServer().subscribe(res => {
      this.productList = res
    });
  }

  updateCartItems(cartProduct: CartProduct): void {
    this.productsService.addProductsToCart(cartProduct)
  }

}

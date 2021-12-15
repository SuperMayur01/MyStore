import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/Product';
import { CartProduct } from 'src/app/model/CartProduct';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productList: Product[] = []
  noOfItems: string = "1"
  displayProduct:Product = {
    id : 0,
    name : "",
    price : 0,
    url : "",
    description : "",
  }
  

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.productsService.getProductsFromServer().subscribe(res => {
      this.productList = res
      const id = this.route.snapshot.paramMap.get('id');
      this.displayProduct = this.productList.filter(p => {
        return p.id == id as unknown as number
      })[0]
    });
}

addToCart(product:Product) : void{
  const cartProduct: CartProduct = {...product, items:0}
  cartProduct["items"] = parseInt(this.noOfItems);
  this.productsService.addProductsToCart(cartProduct)
  alert(`${cartProduct.name}(s) has/have been added to cart`)
}

  }


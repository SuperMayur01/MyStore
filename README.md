# MyStore

## Dependencies

Run `npm install` to leverage all dependencies and get started with the project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components

`product-list` : default/home page
`product-item` : child component of `product-list` used to render all products
`product-item-detail` : details of particular product
`cart`: added products and form
`confirmation` : order summary

## Services

`Product Service` : to fetch products, make changes to cart etc.
`Order Service` : to set and fetch order details for confirmation page

## Model

`Product` : to store data from http get request
`CartProduct` : to store cart data
`OrderDetails` : to store order summary

## Asset

`data.json` : contains products

## Routes

`/` is the default route which shows `product list`
`/product/:id` shows a particular `product details`
`/cart` shows the item added to the `cart`
`/order/success` shows `order summary`

## Navigation

`Header` contains links to `product list` and `cart` pages

From `Product List` page :
click on any product image to open `product details`

From `Product details` page:
click on link to redirect back to `product list` page

From `Cart` page:
click on product image to redirect to `product detail page`
click on submit form to redirect to `confirmation` page

From `confirmation` page:
Click on button to redirect to `product list` page

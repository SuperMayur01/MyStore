export class CartProduct {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    items: number

    constructor () {
        this.id = 1;
        this.name = "";
        this.price = 0;
        this.url = "";
        this.description = "";
        this.items = 0;
    }
}
export class OrderDetails {
    name: string;
    address: string;
    creditcard: string;
    orderedProducts: Array<Object>;
    total:string

    constructor() {
        this.name = "",
        this.address = "",
        this.creditcard = "",
        this.orderedProducts = [],
        this.total = ""
    }
}
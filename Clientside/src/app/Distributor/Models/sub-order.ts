export class SubOrder {
    productId: String;
    productName: String;
    unitPrice: number;
    quantity: number;
    totalAmount: number;

    public SubOrder(){
    this.productId = "0";
    this.productName = "";
    this.unitPrice = 0;
    this.quantity = 0;
    this.totalAmount = 0;
    }
  }
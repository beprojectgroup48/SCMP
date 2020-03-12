export class distributor {
  username:String;
  password:String;
  name:String;
  mobileNumber:number;
  registrationId:number
}

export class subOrder {
  productId: String;
  productName: String;
  quantity: Number;
  unitAmount: Number;
  totalAmount: Number;
}

export class completeOrder {
  orderId: String;
  email: String;
  orders: subOrder[];
  deliveryDate: Date;
  location: String;
  finalAmount: Number;
}


import { SubOrder } from './sub-order';

export class CompleteOrder {
    orderId: String;
    email: String;
    manufacturerName: String;
    orders: SubOrder[];
    issueDate: Date;
    deliveryDate: Date;
    location: String;
    finalAmount: Number;
  }
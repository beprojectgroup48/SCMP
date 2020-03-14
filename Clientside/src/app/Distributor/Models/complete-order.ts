import { subOrder } from './sub-order';

export class CompleteOrder {
    orderId: String;
    email: String;
    manufacturerName: String;
    orders: subOrder[];
    issueDate: Date;
    deliveryDate: Date;
    location: String;
    finalAmount: Number;
  }
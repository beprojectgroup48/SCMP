import { subOrder} from '../models/sub-order';

export class completeOrder {
    orderId: String;
    email: String;
    manufacturerName: String;
    orders: subOrder[];
    issueDate: Date;
    deliveryDate: Date;
    location: String;
    finalAmount: Number;
  }
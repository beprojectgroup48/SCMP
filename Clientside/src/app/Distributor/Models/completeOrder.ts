import { subOrder} from '../models/subOrder';

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
  
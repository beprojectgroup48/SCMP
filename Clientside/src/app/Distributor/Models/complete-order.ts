import { SubOrder } from './sub-order';

export class CompleteOrder {
    orderId: String;
    orders: SubOrder[];
    distributorUsername: String;
    distributorName: String;
    manufacturerUsername: String;
    manufacturerName: String;
    issueDate: Date;
    dueDate: Date;
    finalAmount: number;
    status: String;
  }
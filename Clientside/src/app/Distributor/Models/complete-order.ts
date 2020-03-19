import { SubOrder } from './sub-order';

export class CompleteOrder {
    orderId: String;
    orders: SubOrder[];
    distributorUsername: String;
    issueDate: Date;
    dueDate: Date;
    finalAmount: number;
    status: String;
  }
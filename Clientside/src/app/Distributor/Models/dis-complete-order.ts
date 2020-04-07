import { DistributorSubOrder } from './dis-sub-order';

export class DistributorCompleteOrder {
    orderId: String;
    orders: DistributorSubOrder[];
    distributorUsername: String;
    distributorName: String;
    issueDate: Date;
    dueDate: Date;
    finalAmount: number;
    status: String;
  }
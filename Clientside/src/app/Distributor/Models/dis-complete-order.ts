import { DistributorSubOrder } from './dis-sub-order';

export class DistributorCompleteOrder {
    orderId: String;
    manufacturerUsername: String;
    manufacturerName: String;
    subOrders: DistributorSubOrder[];
    issueDate: Date;
    deliveryDate: Date;
    totalAmount: number;
    status: String;
  }
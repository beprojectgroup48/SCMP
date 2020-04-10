import { PharmacistSubOrder } from './pharm-sub-order';

export class PharmacistCompleteOrder {
    orderId: String;
    subOrders: PharmacistSubOrder[];
    distributorName : String;
    distributorUsername : String;
    issueDate: Date;
    deliveryDate: Date;
    totalAmount: number;
    status: String;
  }
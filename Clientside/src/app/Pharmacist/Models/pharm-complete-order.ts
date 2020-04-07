import { PharmacistSubOrder } from './pharm-sub-order';

export class PharmacistCompleteOrder {
    orderId: String;
    orders: PharmacistSubOrder[];
    pharmacistUsername: String;
    pharmacistName: String;
    distributorName : String;
    distributorUsername : String;
    issueDate: Date;
    dueDate: Date;
    finalAmount: number;
    status: String;
  }
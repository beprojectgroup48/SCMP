import { ManufacturerSubOrder } from './manu-sub-order';

export class ManufacturerCompleteOrder {
    orderId: String;
    orders: ManufacturerSubOrder[];
    pharmacistUsername: String;
    pharmacistName: String;
    distributorName : String;
    distributorUsername : String;
    issueDate: Date;
    dueDate: Date;
    finalAmount: number;
    status: String;
  }
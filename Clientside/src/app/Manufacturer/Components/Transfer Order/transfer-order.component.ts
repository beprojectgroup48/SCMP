import { Component, OnInit } from '@angular/core';
import {ManufacturerSubOrder } from '../../Models/manu-sub-order';
@Component({
  selector: 'app-transfer-order',
  templateUrl: './transfer-order.component.html',
  styleUrls: ['./transfer-order.component.css']
})
export class TransferOrderComponent implements OnInit {


  data1: ManufacturerSubOrder[];

  constructor(  ) {
    
   }

  isValid: boolean= false;
  isValidOrder: boolean= false;
  onGetOrderDetails(){
    this.isValid= true;
  }

  onShowProducts(){
    this.isValidOrder= true;
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styles: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  orderList;

  constructor(private router: Router) { }

  ngOnInit() {
    //this.refreshList();
  }

  /*refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }*/

  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }

  /*onOrderDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteOrder(id).then(res => {
        this.refreshList();
        console.log("Deleted Successfully", "Restaurent App.");
      });
    }
  }*/

}
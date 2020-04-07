import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: Http) { }

  getIncomingOrders(){
    return this.http.get('http://localhost:3000/pharmacist/allIncomingOrders').pipe(map(res => res.json()));
  }
  getDistributors(){
    return  this.http.get('http://localhost:3000/pharmacist/alldistributors').pipe(map(res => res.json()));
   }
  placeOrder(order){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
    console.log(order);
    return this.http.post('http://localhost:3000/manufacturer/placeOrder', order, {headers : headers}).pipe(map(res => res.json()));
  }
}
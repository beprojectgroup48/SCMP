import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  selectedFile: File;
  id : any;
  imageName: any;
  constructor(private http: Http) { 
   this.id = localStorage.getItem('id');
   console.log(this.id);
  }
 
  getDistributorDashboard(){
    return this.http.get('http://localhost:3000/distributor/distdashboard/'+ this.id).pipe(map(res => res.json()));
  }
  getManufacturers(){
    return this.http.get('http://localhost:3000/distributor/allmanufacturers/'+this.id).pipe(map(res => res.json()));
  }
  getPharmacists(){
    console.log('inide pharm serv')
   return  this.http.get('http://localhost:3000/distributor/allpharmacists/'+this.id).pipe(map(res => res.json()));
  }
  placeOrder(order){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
    console.log("Place Order"+order);
    return this.http.post('http://localhost:3000/distributor/placeOrder/'+this.id, order, {headers : headers}).pipe(map(res => res.json()));
  }
  uploadProfilePhoto(selectedFile){
    var formData: any = new FormData();
    formData.append("avatar", selectedFile);
       return this.http.post('http://localhost:3000/distributor/upload/'+this.id, formData).pipe(map(res => res.json()));
  }
  getProfilePhoto(filename:String){
    return this.http.get('http://localhost:3000/distributor/image/'+filename, {responseType: ResponseContentType.Blob}).pipe(map(res=> res.blob() ));
  }
  getIncomingOrders(){
   return this.http.get('http://localhost:3000/distributor/allIncomingOrders/'+this.id).pipe(map(res => res.json()));
  }
  getOutgoingOrders(){
    return this.http.get('http://localhost:3000/distributor/allOutgoingOrders/'+this.id).pipe(map(res => res.json()));
  }
  getPendingOrders(){

  }
  getCompletedOrders(){

  }
  getOrders(){

  }
 

}

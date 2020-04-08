import { map } from 'rxjs/operators';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  id : any;
  imageName: any;
  constructor(private http: Http) { 
    this.id = localStorage.getItem('id');
  }

  getOutgoingOrders(){
    return this.http.get('http://localhost:3000/pharmacist/allOutgoingOrders/'+this.id).pipe(map(res => res.json()));
  }
  getDistributors(){
    return  this.http.get('http://localhost:3000/pharmacist/alldistributors').pipe(map(res => res.json()));
   }
   getPharmacistDashboard(){
    return this.http.get('http://localhost:3000/pharmacist/pharmdashboard/'+ this.id).pipe(map(res => res.json()));
  }
  placeOrder(order){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
    console.log(order);
    return this.http.post('http://localhost:3000/pharmacist/placeOrder/'+this.id, order, {headers : headers}).pipe(map(res => res.json()));
  }

  uploadProfilePhoto(selectedFile){
    console.log(this.id);
    var formData: any = new FormData();
    formData.append("avatar", selectedFile);
       return this.http.post('http://localhost:3000/pharmacist/upload/'+this.id, formData).pipe(map(res => res.json()));
  }
  getProfilePhoto(filename:String){
    return this.http.get('http://localhost:3000/pharmacist/image/'+filename, {responseType: ResponseContentType.Blob}).pipe(map(res=> res.blob() ));
  }
}
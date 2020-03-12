import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login(user){
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');
    if(user.username.substring(0,2) == "MF")
      return this.http.post('http://localhost:3000/login/manufacutrer', user, {headers : headers}).pipe(map(res => res.json()));
    else if(user.username.substring(0,2) == "DB"){
      return this.http.post('http://localhost:3000/login/distributor', user, {headers : headers}).pipe(map(res => res.json()));
    }else if (user.username.substring(0,2) == "PH"){
      console.log('inside ph');
      return this.http.post('http://localhost:3000/login/pharmacist', user, {headers : headers}).pipe(map(res => res.json()));
    }else{
      return this.http.post('http://localhost:3000/login/customer', user, {headers : headers}).pipe(map(res => res.json()));
    }
    }
}

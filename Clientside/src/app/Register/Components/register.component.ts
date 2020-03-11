import { RegistrationService } from '../../Register/Services/registration.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { manufacturer } from '../../Manufacturer/Models/manufacturer'
import { distributor } from '../../Distributor/Models/distributor'
import { pharmacist } from '../../Pharmacist/Models/pharmacist'
import { customer } from '../../Customer/Models/customer'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private RegistrationService: RegistrationService) { }

  stakeholders:String[]=["Manufacturer","Distributer","Pharmacist","Customer"];
  forms:String[]=['20A','20C','21C'];
  formType:String;
  userType:String;
  roleType:String;
  username:String;
  password:String;
  name:String;
  mobileNumber:number;
  transportAgency:String;
  modeOfTransport:String;
  licenceNumber:number;
  address:String;
  location:String;

  gotoLoginPage(){
    this.router.navigate(['/login']);
  }

  gotoRegisterPage(){
    this.router.navigate(['/register']);
  }

  addUser(form1){
    console.log(this.roleType);
    if(this.roleType == 'Manufacturer')
    {
      var muser: manufacturer;
      muser=form1.value;
      muser.username="MF"+muser.licenceNumber;
      this.RegistrationService.registerManufacturer(muser).subscribe( data =>{
          console.log('registration successful');
      })
    }
    else if(this.roleType=='Distributer')
    {
      var duser: distributor;
      duser=form1.value;
      duser.username="DB"+duser.licenceNumber;

      this.RegistrationService.registerDistributor(duser).subscribe( data =>{
        console.log('registration successful');
    })
    }
    else if(this.roleType=='Pharamacist')
    {
      var user3: pharmacist;
      user3=form1.value;
      user3.username="PH"+user3.licenceNumber;
    }
    else if(this.roleType=='Customer')
    {
      var user4: customer;
      user4=form1.value;
      user4.username="CM"+user4.mobileNumber;
    }
    
  }

  ngOnInit() {
  }

}

import { RegistrationService } from '../../Register/Services/registration.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../Manufacturer/Models/manufacturer'
import { Distributor } from '../../Distributor/Models/distributor'
import { Pharmacist } from '../../Pharmacist/Models/pharmacist'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private router: Router, private RegistrationService: RegistrationService) { }
  
  ngOnInit() {
  }
  
  stakeholders:String[]=["Manufacturer","Distributer","Pharmacist"];
  roleType:String;
  username:String;
  password:String;
  name:String;
  mobileNumber:number;
  transportAgency:String;
  modeOfTransport:String;
  registrationId:number;
  address:String;
  location:String;
  verify:number=0;
  
  verifyLicence(licence){
    this.RegistrationService.verifyRegistrationId(licence.value).subscribe(data =>{
      this.verify = data.msg;
    })
    
  }
  
  gotoLoginPage(){
    this.router.navigate(['/login']);
  }
  
  gotoRegisterPage(){
    this.router.navigate(['/register']);
  }
  
  addUser(form1){
    console.log('hii ' + this.roleType);
    if(this.roleType == 'Manufacturer')
    {
      var muser: Manufacturer;
      muser=form1.value;
      muser.username="MF"+muser.registrationId;
      this.RegistrationService.registerManufacturer(muser).subscribe( data =>{
        console.log('registration successful');
      })
    }
    else if(this.roleType=='Distributer')
    {
      var duser: Distributor;
      duser=form1.value;
      duser.username="DB"+duser.registrationId;
      
      this.RegistrationService.registerDistributor(duser).subscribe( data =>{
        console.log(data);
      })
    }
    else if(this.roleType=='Pharmacist')
    {
      
      var puser: Pharmacist;
      puser=form1.value;
      puser.username="PH"+ puser.registrationId;
      this.RegistrationService.registerPharmacist(puser).subscribe( data =>{
        console.log(data);
      });
    }
  }
}
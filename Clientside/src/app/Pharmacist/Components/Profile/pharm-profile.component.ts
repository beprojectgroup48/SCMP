import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pharm-profile',
  templateUrl: './pharm-profile.component.html',
  styleUrls: ['./pharm-profile.component.css']
})
export class PharmacistProfileComponent {

  constructor(
   
    public _d:DomSanitizer
    ) { }

  url ='';
  imgsrc="/assets/avatar.svg";
  onSelectFile(event)
  {
    const file = event.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 
  }
    
}
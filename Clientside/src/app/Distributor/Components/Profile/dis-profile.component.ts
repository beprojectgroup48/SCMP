import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dis-profile',
  templateUrl: './dis-profile.component.html',
  styleUrls: ['./dis-profile.component.css']
})
export class DistributorProfileComponent {

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
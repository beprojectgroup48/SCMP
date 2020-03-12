import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistributorService } from '../../services/distributor.service';

@Component({
  selector: 'app-dis-bookorder',
  templateUrl: './dis-bookorder.component.html',
  styleUrls: ['./dis-bookorder.component.css']
})
export class DistributorBookOrderComponent implements OnInit {

  options: FormGroup;
  constructor(private distributorService: DistributorService) { }

  ngOnInit() {
  }

 
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Match } from '../matches';

@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {

  

  matches:Match[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

}

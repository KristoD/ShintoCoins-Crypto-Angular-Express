import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  constructor(private _httpService: HttpService) { }
  number : number;
  value : number;
  balance : number;

  ngOnInit() {
    this.value = this._httpService.coinValue;
    this.balance = this._httpService.coinBalance;
  }

  onSubmit() {
    this._httpService.transactions("Bought", this.number, this.value);
    this.ngOnInit();
  }

}

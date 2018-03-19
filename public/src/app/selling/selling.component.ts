import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  number: number;
  value : number;
  balance: number;
  status: boolean;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.value = this._httpService.coinValue;
    this.balance = this._httpService.coinBalance;
  }

  onSubmit() {
    if (this.number > this.balance) {
      this.status = false;
    } else {
      this.status = true;
      this._httpService.transactions("Sold", this.number, this.value);
      this.ngOnInit();
    }
  }

}

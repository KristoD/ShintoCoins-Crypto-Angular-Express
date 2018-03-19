import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  coinValue = 1.00;
  coinBalance = 0;
  ledger = [];
  constructor(private _http: HttpClient) {}

  transactions(event, amt, val) {
    var transactionID = Math.floor(Math.random() * (9999 - 1) + 1);
    if(event === "Bought") {
      this.ledger.push({id: transactionID, amount: amt, value: val, event: event});
      this.coinBalance += amt;
      this.coinValue += amt;
    } else if (event === "Sold") {
      if(this.coinValue === 1) {
        this.coinValue = 1;
      } else {
        this.coinValue -= amt;
      }
      this.coinBalance -= amt;
      this.ledger.push({id: transactionID, amount: amt, value: val, event: event});
    } else if (event === "Mined") {
      this.ledger.push({id: transactionID, amount: amt, value: val, event: event});
    }
  }

  mineCoin() {
    let mined = 1
    this.coinBalance++;
    let val = this.coinValue++;
    if(mined === 0) {
      mined++;
    }
    this.transactions("Mined", mined, val);
  }
}

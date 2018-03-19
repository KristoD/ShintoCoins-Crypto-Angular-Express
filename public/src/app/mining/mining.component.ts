import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {
  status : boolean;
  answer = "";
  algo = "8";
  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
  }

  onMineSubmit() {
    if(this.answer != this.algo) {
      this.status = false;
    } else {
      this._httpService.mineCoin();
      console.log(this._httpService.coinBalance, this._httpService.coinValue)
    }
  }

}

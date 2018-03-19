import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  trans : any[];
  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      for(let i = 0; i < this._httpService.ledger.length; i++) {
        if(this._httpService.ledger[i].id == params['id']) {
          this.trans = this._httpService.ledger[i];
        }
      }
    });
  }
}

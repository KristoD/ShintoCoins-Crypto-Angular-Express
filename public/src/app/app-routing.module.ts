import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiningComponent } from './mining/mining.component';
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';
import { LedgerComponent } from './ledger/ledger.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mine', component: MiningComponent},
  {path: 'buy', component: BuyingComponent},
  {path: 'sell', component: SellingComponent},
  {path: 'ledger', component: LedgerComponent},
  {path: 'ledger/:id', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

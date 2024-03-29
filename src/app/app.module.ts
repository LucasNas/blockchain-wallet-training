import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Block, BlockchainService } from 'projects/blockchain/src/public_api';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockComponent } from './block/block.component';
import { Routes, RouterModule } from '@angular/router';

const GenesisProvider = () => {
  return new Block(1, 12345, [], 'GENESIS', '0ae1234', '00');
};

const appRoutes: Routes = [ {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}];


@NgModule({
  declarations: [
    AppComponent,
    SendTransactionComponent,
    BalanceComponent,
    DashboardComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [{provide: 'GENESIS_BLOCK', useFactory: GenesisProvider}, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

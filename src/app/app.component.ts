import { Component, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blockchain Wallet Training';
  public blockChain: Blockchain;
  public isValid: boolean;


  constructor(@Inject(BlockchainService) private blockchainservice: BlockchainService) {
    this.blockChain = this.blockchainservice.blockchain;
    this.isValid = this.blockChain.isValidChain(this.blockChain);
  }

  onMine(): boolean {

    if (this.blockChain.pendingTransactions.length > 0) {
      return this.blockchainservice.mine();
    }
    return false;
  }

  onBalance() {
  }



}

import { Component, Inject } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  public blockChain: Blockchain;

  constructor(@Inject(BlockchainService) private blockchainservice: BlockchainService){
    this.blockChain= this.blockchainservice.blockchain;
  }

  onMine(): boolean{
    return this.blockchainservice.mine();
  }

  onSend(){
   const blockIndex= this.blockchainservice.addTransaction(
      new Transaction(20,'eu','vc')
    );
    alert("Sua transacao deu boa no block" + blockIndex) 
  }
}

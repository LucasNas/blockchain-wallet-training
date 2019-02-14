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
  public isValid: boolean;

  constructor(@Inject(BlockchainService) private blockchainservice: BlockchainService){
    this.blockChain= this.blockchainservice.blockchain;
    this.isValid= this.blockChain.isValidChain(this.blockChain);
  }

  onMine(): boolean{
    return this.blockchainservice.mine();
  }

  onBalance(){
    
  }

  
}

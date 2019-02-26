import { Component, OnInit, Inject } from '@angular/core';
import { BlockchainService, Transaction } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-send-transaction',
  templateUrl: './send-transaction.component.html',
  styleUrls: ['./send-transaction.component.scss']
})
export class SendTransactionComponent implements OnInit {

  constructor(@Inject(BlockchainService) private blockchainservice: BlockchainService) {}


  ngOnInit() {
  }

  onSend(amount: number, recipient: string) {
    const id = this.blockchainservice.blockchain.nodeUrl;
    const transaction = new Transaction(
      amount,
      id,
      recipient
    );

    this.blockchainservice.addTransaction(transaction);
  }

}

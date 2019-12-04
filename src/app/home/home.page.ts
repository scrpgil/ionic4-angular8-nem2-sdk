import {Component} from '@angular/core';
import {Address, AccountHttp, NetworkType} from 'nem2-sdk';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    accountInfo: string = "";
    constructor() {
      this.getAccountInfo();
    }
    getAccountInfo() {
        const accountHttp = new AccountHttp('http://13.114.200.132:3000');
        const address = Address.createFromRawAddress(
            'SCA7ZS-2B7DEE-BGU3TH-SILYHC-RUR32Y-YE55ZB-LYA2',
        );
        accountHttp.getAccountInfo(address).subscribe(x => {
            this.accountInfo = JSON.stringify(x, null, '\t');
          console.log(this.accountInfo);
        });
    }
}

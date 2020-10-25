import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  coins: number = 0;
  msg: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onTransfer() {
    const res = this.userService.addMove(this.contact, this.coins);
    if (!res) this.msg = 'You dont have enough coins!';
    setTimeout(() => {
      this.msg = '';
    }, 4000);
    this.coins = null;
  }
}

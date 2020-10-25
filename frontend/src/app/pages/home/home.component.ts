import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { BitCoinService } from 'src/app/services/bitCoin.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User = null;
  coin: Number = 0;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private bitCoinService: BitCoinService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser();
    if(!this.user) this.router.navigate(['/signup']);
    const coin = await this.bitCoinService.getRate();
    this.coin = coin;
  }
}

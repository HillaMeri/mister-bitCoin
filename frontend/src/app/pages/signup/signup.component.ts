import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: String = '';

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignup(){
    this.userService.signup(this.name);
    this.router.navigate(['/']);
  }
}

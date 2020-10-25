import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() id: string = ''
  moves: Move[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.moves = this.userService.getMoves(this.id);     
  }

}

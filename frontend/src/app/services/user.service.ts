import { Injectable } from '@angular/core';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';

const USER = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getUser(): User {
    const user = _loadFromStorage(USER);
    return user;
  }

  public signup(name) {
    const user: User = {
      name,
      coins: 100,
      moves: [],
    };
    _saveToStorage(USER, user);
  }

  public addMove(contact, amount) {
    const user = this.getUser();
    if (user.coins < amount) return false;
    const move: Move = {
      toId: contact._id,
      to: contact.name,
      at: new Date(),
      amount,
    };
    user.moves.push(move);
    user.coins = user.coins - amount;
    _saveToStorage(USER, user);
    return true;
  }

  public getMoves(byId = '') {
    const user = this.getUser();
    if (!byId) return user.moves;
    const moves = user.moves.filter((move) => move.toId === byId);
    return [moves[0], moves[1], moves[2]];
  }
}
  
function _saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function _loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}

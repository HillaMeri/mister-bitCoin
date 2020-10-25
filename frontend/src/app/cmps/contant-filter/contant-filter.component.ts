import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contant-filter',
  templateUrl: './contant-filter.component.html',
  styleUrls: ['./contant-filter.component.scss'],
})
export class ContantFilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  filterBy = {
    name: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSetFilter(value) {
    this.onFilter.emit(this.filterBy);
  }
}

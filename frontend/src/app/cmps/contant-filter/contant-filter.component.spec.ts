import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantFilterComponent } from './contant-filter.component';

describe('ContantFilterComponent', () => {
  let component: ContantFilterComponent;
  let fixture: ComponentFixture<ContantFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

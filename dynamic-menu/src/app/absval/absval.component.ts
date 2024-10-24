import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbsValAvailability, AbsValAlterability } from './absval-availability';

@Component({
  selector: 'app-absval',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './absval.component.html',
  styleUrls: ['./absval.component.css']
})
export class AbsvalComponent implements OnInit {
  ruleID: number = 0; // Default value
  availability: { [key: string]: boolean } = {};
  alterability: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    this.updateExpressions();
  }

  updateExpressions(): void {
    this.availability = AbsValAvailability(this.ruleID);
    this.alterability = AbsValAlterability(this.ruleID);
  }
}

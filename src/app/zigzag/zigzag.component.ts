import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zigzag',
  templateUrl: './zigzag.component.html',
  styleUrls: ['./zigzag.component.css'],
})
export class ZigzagComponent implements OnInit {
  inputString: string = '';
  numRows = 3;
  result = '';
  zigzag: string[][] = [];

  convert() {
    if (this.numRows == 1) {
      this.result = this.inputString;
      this.zigzag = [Array.from(this.inputString)];
      return;
    }

    this.zigzag = Array.from({ length: this.numRows }, () => new Array());
    let row = 0;
    let col = 0;
    let goingDown = false;
    for (let c of this.inputString) {
      this.zigzag[row][col] = c;
      if (row == 0 || row == this.numRows - 1) {
        goingDown = !goingDown;
      }
      row += goingDown ? 1 : -1;
      col++;
    }
    this.result = '';
    for (let i = 0; i < this.numRows; i++) {
      for (const element of this.zigzag[i]) {
        if (element) {
          this.result += element;
        }
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.convert();
  }
}

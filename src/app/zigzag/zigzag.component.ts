import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zigzag',
  templateUrl: './zigzag.component.html',
  styleUrls: ['./zigzag.component.css']
})
export class ZigzagComponent implements OnInit {
  inputString = "";
  numRows = 3;
  result = "";

  convert(){
    if (this.numRows == 1){
      this.result = this.inputString;
      return;
    }

    let zigzag = new Array(this.numRows);
    for (let i = 0; i<this.numRows; i++){
      zigzag[i] = new Array();
    }
    let row = 0;
    let col = 0;
    let goingDown = false;
    for(let c of this.inputString){
      zigzag[row][col] = c;
      if(row == 0 || row == this.numRows - 1){
        goingDown = !goingDown;
      }
      row += goingDown ? 1: -1;
      col++;
    }
    this.result = "";
    for (let i = 0; i<this.numRows; i++){
      for (const element of zigzag[i]){
        if(element){
          this.result += element;
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

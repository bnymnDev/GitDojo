import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dojo',
  templateUrl: './dojo.component.html',
  styleUrls: ['./dojo.component.css']
})
export class DojoComponent implements OnInit {
  inputString = "";
  numRows =  3;
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
      for (let j = 0; j<zigzag[i].length; j++){
        if(zigzag[i][j]){
          this.result += zigzag[i][j];
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

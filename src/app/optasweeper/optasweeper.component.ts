import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-optasweeper',
  templateUrl: './optasweeper.component.html',
  styleUrls: ['./optasweeper.component.css']
})
export class OptasweeperComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {
    // vorerst nur mit 8x8 Spielfeld, kann aber geändert werden
    this.createField(8, 8);
    this.placeMines();
    this.countMinesAround();
  }

  public field: any[][] = [];
  numberOfMines: number = 10;

  /*
  mine = gibt an, ob sich auf dem Feld eine Mine befindet
  open = gibt an, ob das Feld geöffnet wurde
  minesAround = gibt die Anzahl der Minen in benachbarten Feldern an
  */
  createField(width: number, height: number) {
    this.field = [];
    for (let i = 0; i < height; i++) {
      this.field[i] = [];
      for (let j = 0; j < width; j++) {
        this.field[i][j] = {mine: false, open: false, minesAround: 0};
      }
    }
  }

  // Methoden zum Öffnen und Markieren von Feldern
  openField(x: number, y: number) {
    if (this.field[x][y].open || this.field[x][y].marked) {
      return;
    }
    this.field[x][y].open = true;
    if (this.field[x][y].mine) {
      this.gameOver();
    } else if (this.field[x][y].minesAround === 0) {
      this.openFieldsAround(x, y);
    }
  }

  markField(x: number, y: number) {
    this.field[x][y].marked = true;
  }


  // todo: Methoden zum Platzieren der Minen
  placeMines() {
    for (let i = 0; i < this.numberOfMines; i++) {
      let x = Math.floor(Math.random() * this.field.length);
      let y = Math.floor(Math.random() * this.field[0].length);
      if (!this.field[x][y].mine) {
        this.field[x][y].mine = true;
      } else {
        i--;
      }
    }
  }


  // todo: Code zum Zählen der Minen in benachbarten Feldern
  countMinesAround() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (!this.field[i][j].mine) {
          let mines = 0;
          for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
              if (x >= 0 && x < this.field.length && y >= 0 && y < this.field[x].length && this.field[x][y].mine) {
                mines++;
              }
            }
          }
          this.field[i][j].minesAround = mines;
        }
      }
    }
  }


  openFieldsAround(x: number, y: number) {
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && i < this.field.length && j >= 0 && j < this.field[i].length) {
          this.openField(i, j);
        }
      }
    }
  }


  gameOver() {
    this.snackBar.open('Game Over', 'OK :(', { duration: 1500 });
  }

  restartGame(){
    this.createField(8, 8);
    this.placeMines();
    this.countMinesAround();
  }

  ngOnInit(): void {
    this.snackBar.open('Spiel gestartet', 'OK', { duration: 3000 });
  }

}

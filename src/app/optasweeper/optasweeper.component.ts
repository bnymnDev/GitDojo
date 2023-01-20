import { NewGameModalComponent } from './new-game-modal/new-game-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { GameOverModalComponent } from './game-over-modal.component';

@Component({
  selector: 'app-optasweeper',
  templateUrl: './optasweeper.component.html',
  styleUrls: ['./optasweeper.component.css'],
})
export class OptasweeperComponent implements OnInit {
  public field: any[][] = [];
  numberOfMines: number = 0;
  timer: number = 0;
  intervalId: any;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  openNewGameModal(): void {
    const dialogRef = this.dialog.open(NewGameModalComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.difficulty === 'beginner') {
          this.numberOfMines = 10;
          this.createField(8, 8);
        } else if (result.difficulty === 'intermediate') {
          this.numberOfMines = 40;
          this.createField(16, 16);
        } else if (result.difficulty === 'expert') {
          this.numberOfMines = 99;
          this.createField(30, 16);
        } else if (result.difficulty === 'custom') {
          this.createField(result.customWidth, result.customHeight);
          this.numberOfMines = result.customMines;
        }
        this.placeMines();
        this.countMinesAround();
        this.startTimer();
      }
    });
  }

  startTimer() {
    this.timer = 0;
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  getTimer() {
    return this.timer;
  }

  gameOver() {
    clearInterval(this.intervalId);
    const dialogRef = this.dialog.open(GameOverModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.openNewGameModal();
      } else {
        this.revealAllFields();
      }
    });
  }

  win() {
    clearInterval(this.intervalId);
    // Code zum Anzeigen des Gewonnen-Modals
}


  revealAllFields() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        this.field[i][j].open = true;
      }
    }
  }

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
        this.field[i][j] = { mine: false, open: false, minesAround: 0 };
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
              if (
                x >= 0 &&
                x < this.field.length &&
                y >= 0 &&
                y < this.field[x].length &&
                this.field[x][y].mine
              ) {
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
        if (
          i >= 0 &&
          i < this.field.length &&
          j >= 0 &&
          j < this.field[i].length
        ) {
          this.openField(i, j);
        }
      }
    }
  }

  getNumberColor(minesAround: number) {
    switch (minesAround) {
      case 0:
        return '#F2F2F2';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      case 3:
        return 'red';
      case 4:
        return 'purple';
      default:
        return 'darkred';
    }
  }

  getBackgroundColor(open: boolean): string {
    return open ? '#F2F2F2' : '';
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-game-modal',
  templateUrl: './new-game-modal.component.html',
  styleUrls: ['./new-game-modal.component.css'],
})
export class NewGameModalComponent implements OnInit {
  difficulty: string = 'beginner';
  customWidth: number = 8;
  customHeight: number = 8;
  customMines: number = 10;

  constructor(public dialogRef: MatDialogRef<NewGameModalComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  startNewGame(): void {
    this.dialogRef.close({
      difficulty: this.difficulty,
      customWidth: this.customWidth,
      customHeight: this.customHeight,
      customMines: this.customMines,
    });
  }
}

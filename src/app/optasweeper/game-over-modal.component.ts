import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-over-modal',
  template: `
  <h1 mat-dialog-title>Game Over</h1>
  <mat-dialog-content>
    <p>Möchten Sie ein neues Spiel starten?</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Ja</button>
    <button mat-button [mat-dialog-close]="false">Nein, alle Felder aufdecken</button>
  </mat-dialog-actions>
`
})
export class GameOverModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

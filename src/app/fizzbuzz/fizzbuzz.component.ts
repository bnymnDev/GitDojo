import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css'],
})
export class FizzbuzzComponent implements OnInit {
  dataSource = new MatTableDataSource();
  inputNumber: number = 5;
  fizzBuzzResults: any[] = [];
  displayedColumns: string[] = ['number'];

  generateFizzBuzz() {
    if (this.inputNumber <= 10000) {
      this.fizzBuzzResults = [];
      for (let i = 1; i <= this.inputNumber; i++) {
        if (i % 15 === 0) {
          this.fizzBuzzResults.push('FizzBuzz');
        } else if (i % 3 === 0) {
          this.fizzBuzzResults.push('Fizz');
        } else if (i % 5 === 0) {
          this.fizzBuzzResults.push('Buzz');
        } else {
          this.fizzBuzzResults.push(i);
        }
      }
      this.dataSource.data = this.fizzBuzzResults;
      this.snackBar.open('FizzBuzz successfull', 'OK', { duration: 1500});
    } else{
      this.snackBar.open('FizzBuzz failed! Number is higher than 10000', 'OK', { duration: 5000});
    }
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.generateFizzBuzz();
  }
}

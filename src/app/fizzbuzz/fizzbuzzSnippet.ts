import { Component } from '@angular/core';

export class FizzbuzzSnippet {
  fizzBuzzSnippet =
  `if (this.inputNumber <= 10000) {
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
    this.snackBar.open('FizzBuzz successfull', 'OK', { duration: 1500 });
  } else {
    this.snackBar.open('FizzBuzz failed! Number is higher than 10000', 'OK', {
      duration: 5000,
    });
  }`
}

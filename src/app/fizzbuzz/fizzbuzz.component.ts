import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { saveAs } from 'file-saver';
import * as json2csv from 'json2csv';
import jsPDF from 'jspdf';
import * as xmlbuilder from 'xmlbuilder';
import { FizzbuzzSnippet } from './fizzbuzzSnippet';


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

  fizzBuzzSnippet = FizzbuzzSnippet;

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
      this.snackBar.open('FizzBuzz successfull', 'OK', { duration: 1500 });
    } else {
      this.snackBar.open('FizzBuzz failed! Number is higher than 10000', 'OK', {
        duration: 5000,
      });
    }
  }

  exportJSON() {
    const jsonData = JSON.stringify(this.fizzBuzzResults);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'fizzbuzz-results.json');
  }

  exportTXT() {
    const txtData = this.fizzBuzzResults.join('\n');
    const blob = new Blob([txtData], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'fizzbuzz-results.txt');
  }

  exportCSV() {
    const data = this.fizzBuzzResults.map((result) => ({ result: result }));
    const fields = ['result'];
    const opts = { fields };
    const csvData = json2csv.parse(data, opts);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'fizzbuzz-results.csv');
  }

  exportPDF() {
    const doc = new jsPDF();
    doc.text(this.fizzBuzzResults.join('\n'), 20, 20);
    doc.save('fizzbuzz-results.pdf');
  }

  exportXML() {
    const root = xmlbuilder.create('fizzbuzz-results');
    this.fizzBuzzResults.forEach(result => {
      root.ele('result', result);
    });
    const xmlData = root.end({ pretty: true });
    const blob = new Blob([xmlData], { type: 'text/xml;charset=utf-8' });
    saveAs(blob, 'fizzbuzz-results.xml');
  }

  exportData() {
    const exportType = prompt(
      'Please enter the type of export you want (json, csv, txt, pdf)'
    );
    switch (exportType) {
      case 'json':
        this.exportJSON();
        break;
      case 'csv':
        this.exportCSV();
        break;
      case 'txt':
        this.exportTXT();
        break;
      case 'pdf':
        this.exportPDF();
        break;
      default:
        alert('Invalid export type. Please enter json, csv, txt, or pdf.');
        break;
    }
  }

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.generateFizzBuzz();
  }
}

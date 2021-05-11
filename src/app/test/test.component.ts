import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public title = "test component"
  public name = "User"
  public siteUrl = window.location.href
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success": !this.isSpecial,
    "text-danger": this.isSpecial,
    "text-special": this.isSpecial
  }
  public classStyle = "yellow"
  public objStyles = {
    color: 'gray',
    fontSize: '32px'
  }
  public greeting = ''
  constructor() { }
  greet() {
    return this.name
  }
  ngOnInit(): void {
  }
  onClick(event: any) {
    console.log(event)
    alert('Welcome to Codevolution!')
    this.greeting = "Welcome to Codevolution!"
  }
  logMessage(value: any) {
    console.log(value)
  }
}

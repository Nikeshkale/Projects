import { CommonModule, NgFor } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, isSignal, numberAttribute, OnChanges, OnDestroy, OnInit, Output, output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Transform } from 'stream';
import { Users } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';


function formateName(name : string) {
  return "Hello " + name.toLocaleUpperCase()
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input({ alias: 'userName' }) name = '';
  @Input({ transform: booleanAttribute }) isStatus!: boolean;
  @Input({ alias: 'userSalary', transform: numberAttribute }) salary!: number;

  @Output() myEvent = new EventEmitter<Users>();

  @ViewChild('myheading') heading?: ElementRef;
  
  
  

  constructor() {
    console.log(this.name);

    console.log('constructor called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called', this.heading?.nativeElement.textContent) ;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges callled', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called ---> ', this.name);
    console.log('ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }

  sendData() {
    this.myEvent.emit({ name: this.name, newSalary: 50000 });
    // console.log("View Child", this.heading?.nativeElement.textContent);

    // this.salary = 10000;

    // this.myEvent.emit("sending data from user-profile ")
  }

  // name: string = 'ramesh';
  status = 'single';
  // salary = 40000;
  isDisable = false;
  inputValue = '';
  phoneNumber: number = 1234455666;
  bgColor = 'blue';

  users = [
    { name: 'ramesh', isSingle: true, salary: 5000 },
    // { name: 'gamesh', isSingle: false, salary: 6000 },
    // { name: 'pamesh', isSingle: true, salary: 8000 },
  ];
  // console.log(this.inputValue);

  onChange(e: Event) {
    // const value = e.target.value;
    const value = (e.target as HTMLInputElement).value;
    console.log(this.inputValue);
  }
}







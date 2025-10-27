import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentTime!: string;
  currentDate!: string;
  greeting!: string;
  user: string = 'Samudra';

  constructor() { }

  ngOnInit() {
    this.updateTimeAndDate();
    this.setGreeting(this.user);
    this.startTimer();
  }

  updateTimeAndDate() {
    const now = new Date();
    this.currentTime = format(now, 'hh:mm a');
    this.currentDate = format(now, 'MMM d, yyyy - EEEE');
  }

  setGreeting(_user: string) {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = `Good morning, ${_user}!`;
    } else if (hour < 18) {
      this.greeting = `Good afternoon, ${_user}!`;
    } else {
      this.greeting = `Good evening, ${_user}!`;
    }
  }

  startTimer() {
    setInterval(() => {
      this.updateTimeAndDate();
    }, 1000);
  }
}
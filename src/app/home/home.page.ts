import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonIcon } from '@ionic/angular/standalone';
import { format } from 'date-fns';
import { addIcons } from 'ionicons';
import { exitOutline, hourglassOutline, power, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonAvatar,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ]
})
export class HomePage implements OnInit {
  currentTime!: string;
  currentDate!: string;
  greeting!: string;
  user: string = 'Samudra';

  constructor() {
    addIcons({ power, timeOutline, exitOutline, hourglassOutline });
  }

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
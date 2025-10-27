import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  power,
  checkmarkCircle,
  timeOutline,
  logInOutline,
  timerOutline
} from 'ionicons/icons';
import { format, differenceInMinutes } from 'date-fns';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon
  ]
})
export class CheckInPage implements OnInit, OnDestroy {
  currentTime: string = '';
  isCheckedIn: boolean = false;
  checkInTime: string = '';
  checkInDate: Date | null = null;
  workingDuration: string = '0m';

  private timeInterval: any;

  constructor() {
    addIcons({
      power,
      checkmarkCircle,
      timeOutline,
      logInOutline,
      timerOutline
    });
  }

  ngOnInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
      if (this.isCheckedIn) {
        this.updateDuration();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = format(now, 'hh:mm:ss a');
  }

  updateDuration() {
    if (this.checkInDate) {
      const now = new Date();
      const minutes = differenceInMinutes(now, this.checkInDate);
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;

      if (hours > 0) {
        this.workingDuration = `${hours}h ${mins}m`;
      } else {
        this.workingDuration = `${mins}m`;
      }
    }
  }

  toggleCheckIn() {
    const now = new Date();

    if (!this.isCheckedIn) {
      // Check in
      this.isCheckedIn = true;
      this.checkInDate = now;
      this.checkInTime = format(now, 'hh:mm a');
      console.log('Checked in at:', this.checkInTime);
    } else {
      // Check out
      this.isCheckedIn = false;
      const checkOutTime = format(now, 'hh:mm a');
      console.log('Checked out at:', checkOutTime);
      console.log('Total duration:', this.workingDuration);

      // Reset
      this.checkInDate = null;
      this.workingDuration = '0m';
    }
  }
}
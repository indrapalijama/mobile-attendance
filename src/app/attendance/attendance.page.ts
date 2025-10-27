import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonModal,
  IonDatetime,
  IonIcon,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, checkmarkCircle, closeCircle } from 'ionicons/icons';

interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent';
  timestamp: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonModal,
    IonDatetime,
    IonIcon,
    IonButton,
    IonButtons
  ]
})
export class AttendancePage implements OnInit {
  selectedDate: string = '';
  isDatePickerOpen: boolean = false;

  attendanceRecords: AttendanceRecord[] = [
    { date: '20 October 2024', status: 'Present', timestamp: '2025-10-20' },
    { date: '21 October 2025', status: 'Present', timestamp: '2025-10-21' },
    { date: '22 October 2025', status: 'Present', timestamp: '2025-10-22' },
    { date: '23 October 2025', status: 'Present', timestamp: '2025-10-23' },
    { date: '24 October 2025', status: 'Present', timestamp: '2025-10-24' },
    { date: '25 October 2025', status: 'Absent', timestamp: '2025-10-25' },
    { date: '26 October 2025', status: 'Absent', timestamp: '2025-10-26' },
    { date: '27 October 2025', status: 'Absent', timestamp: '2025-10-27' },
    { date: '28 October 2025', status: 'Absent', timestamp: '2025-10-28' },
    { date: '29 October 2025', status: 'Absent', timestamp: '2025-10-29' },
    { date: '30 October 2025', status: 'Absent', timestamp: '2025-10-30' },
    { date: '31 October 2025', status: 'Absent', timestamp: '2025-10-31' },
  ];

  filteredRecords: AttendanceRecord[] = [];

  constructor() {
    addIcons({ calendarOutline, checkmarkCircle, closeCircle });
  }

  initDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.selectedDate = `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.initDate();
    this.filteredRecords = [...this.attendanceRecords];
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  dateSelected(event: any) {
    const value = event.detail.value;

    if (!value) {
      return;
    }
    this.selectedDate = value;
    const dateOnly = value.split('T')[0];

    // Filter records
    this.filteredRecords = this.attendanceRecords.filter(record =>
      record.timestamp === dateOnly
    );
  }

  resetFilter() {
    this.initDate();
    this.filteredRecords = [...this.attendanceRecords];
  }
}
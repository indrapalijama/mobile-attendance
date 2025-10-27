import { Component } from '@angular/core';

interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent';
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage {
  selectedDate: string = '';
  isDatePickerOpen: boolean = false;
  attendanceRecords: AttendanceRecord[] = [
    { date: '20 December 2024', status: 'Present' },
    { date: '21 December 2024', status: 'Present' },
    { date: '22 December 2024', status: 'Present' },
    { date: '23 December 2024', status: 'Present' },
    { date: '24 December 2024', status: 'Present' },
    { date: '25 December 2024', status: 'Absent' },
    { date: '26 December 2024', status: 'Absent' },
    { date: '27 December 2024', status: 'Absent' },
    { date: '28 December 2024', status: 'Absent' },
    { date: '29 December 2024', status: 'Absent' },
    { date: '30 December 2024', status: 'Absent' },
    { date: '31 December 2024', status: 'Absent' },
  ];
  filteredRecords: AttendanceRecord[] = [];

  constructor() {
    this.filteredRecords = [...this.attendanceRecords];
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  dateSelected(value: any) {
    this.isDatePickerOpen = false;
    this.selectedDate = value;

    // Convert the selected date to a format matching your mock data
    const date = new Date(value);
    const formattedDate = `${date.getDate()} December 2024`;

    // Filter records based on selected date
    this.filteredRecords = this.attendanceRecords.filter(record =>
      record.date.includes(formattedDate)
    );

    if (this.filteredRecords.length === 0) {
      this.filteredRecords = [...this.attendanceRecords];
    }
  }
}

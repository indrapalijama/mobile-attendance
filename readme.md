# Ionic Attendance Tracker App

A modern employee attendance tracking application built with Ionic Angular and standalone components, featuring a beautiful neomorphic design.

## Features

- **Check-In/Out System**: Dedicated page for employee check-in and check-out with real-time duration tracking
- **Attendance History**: Calendar-based view of past attendance records with date filtering
- **Icon-Based Status**: Visual indicators (checkmark for Present, close for Absent)
- **Neomorphic Design**: Modern, soft UI design with shadow-based depth effects
- **Real-Time Clock**: Live time display with accurate timezone handling
- **Responsive Layout**: Optimized for mobile devices with 4-tab navigation.


## Tech Stack

```
Ionic CLI                     : 7.2.1
Ionic Framework               : @ionic/angular 8.7.7
@angular-devkit/build-angular : 19.2.18
@angular-devkit/schematics    : 18.2.21
@angular/cli                  : 19.2.18
@ionic/angular-toolkit        : 12.3.0

Capacitor CLI                 : 6.2.0
@capacitor/core              : 6.2.0

Node.js                      : v22.15.0
npm                          : 10.9.2
```

**Additional Dependencies:**

- `date-fns` - Modern date utility library for timezone-safe date handling
- Angular 18+ with Standalone Components architecture


## Getting Started

### Prerequisites

- Node.js (v22.15.0 or higher)
- npm (v10.9.2 or higher)
- Ionic CLI 7.2.1


### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd attendance
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
ionic serve
```

4. **Open in browser:**
Navigate to `http://localhost:8100`

### Building for Production

```bash
# Web build
ionic build --prod

# Android build
ionic capacitor build android --prod

# iOS build
ionic capacitor build ios --prod
```


## Project Structure

```
src/app/
├── account/             
│   ├── account.page.html
│   ├── account.page.scss
│   ├── account.page.ts
│   └── account.routes.ts
├── attendance/          
│   ├── attendance.page.html
│   ├── attendance.page.scss
│   ├── attendance.page.ts
│   └── attendance.routes.ts
├── check-in/            
│   ├── check-in.page.html
│   ├── check-in.page.scss
│   ├── check-in.page.ts
│   └── check-in.routes.ts
├── home/                
│   ├── home.page.html
│   ├── home.page.scss
│   ├── home.page.ts
│   └── home.routes.ts
├── tabs/                
│   ├── tabs.page.html
│   ├── tabs.page.scss
│   ├── tabs.page.ts
│   └── tabs.routes.ts
├── app.component.ts     
├── app.routes.ts        
└── main.ts            
```


## Design System

### Color Palette

```scss
$primary: #003f88;      // Dark blue
$secondary: #00509d;    // Medium blue
$present-color: #2e7d32; // Green (for Present status)
$absent-color: #c62828;  // Red (for Absent status)
$text-dark: #1a1a1a;
$text-light: #666666;
```


### Neomorphic Shadows

```scss
/* Raised elements */
box-shadow:
  5px 5px 10px #d0d0d0,
  -5px -5px 10px #ffffff;

/* Pressed/inset elements */
box-shadow:
  inset 3px 3px 6px #d0d0d0,
  inset -3px -3px 6px #ffffff;
```


## Key Commands

```bash
# Generate new page
ionic generate page [name] --standalone

# Serve with live reload
ionic serve

# Build for production
ionic build --prod

# Run on Android device
ionic capacitor run android --livereload --external

# Open in Android Studio
npx cap open android

# Standalone migration
ng generate @angular/core:standalone
```


## To Do

[ ] Data persistence (localStorage/backend API)
[ ] Geolocation verification for check-in
[ ] Attendance reports and analytics
[ ] User authentication system
[ ] Push notifications for check-in reminders
[ ] Break time tracking
[ ] Export attendance data (CSV/PDF)
[ ] Multi-user support
[ ] Offline mode with sync


## Debugging

### Enable Chrome DevTools for Android

```bash
# Connect device and run with live reload
ionic capacitor run android --livereload --external

# Open chrome://inspect in Chrome browser
# Select your device and click "inspect"
```


## License

This project is licensed under the MIT License.

***

## Credits

Built with ❤️ by Fulk

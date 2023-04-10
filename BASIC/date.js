// Create a new Date object with the current date and time
var currentDate = new Date();
// Create a new Date object with a specific date and time
var specificDate = new Date(2023, 2, 31, 12, 30, 0, 0);
// Get the current year
var currentYear = currentDate.getFullYear();

// Set the year to 2024
currentDate.setFullYear(2024);

// Format the date as a string
var formattedDate = currentDate.toDateString();

// Get the difference in days between two dates
var date1 = new Date(2023, 2, 31);
var date2 = new Date(2023, 3, 10);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

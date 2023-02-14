// Check if a license plate is subject to mobility restrictions based on the current date and last digit of the plate
export function checkLicensePlate(lastDigit) {
    // Get the day of the week (0 is Sunday, 6 is Saturday) and the day of the month (1-31)
    const dayOfWeek = new Date().getDay();
    const monthDay = new Date().getDate();
  
    // Determine if it is a weekend or an even/odd day of the month and if the last digit is restricted
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isEvenMonthDay = monthDay % 2 === 0;
    const isLastDigitRestricted = (lastDigit >= 1 && lastDigit <= 5) || lastDigit === 0;
  
    // Determine if the vehicle is subject to mobility restrictions based on the conditions
    const isRestricted = !isWeekend && ((isEvenMonthDay && isLastDigitRestricted) || (!isEvenMonthDay && !isLastDigitRestricted));
  
    // Return a boolean indicating whether the vehicle is subject to mobility restrictions
    return isRestricted;
  }
  
  // Get the time until the next circulation period begins, assuming a 6:00 AM to 9:00 PM schedule
  export function getTimeUntilNextCirculation() {
    // Get the current date and time
    const now = new Date();
  
    // Get the current hour, minute, and second
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    let timeUntilNextCirculation;
  
    // Determine if it is currently outside the circulation period, and if so, when the next one begins
    if (hours < 6 || (hours === 9 && minutes > 0) || hours >= 21) {
      timeUntilNextCirculation = "tomorrow at 6:00 AM";
    } else {
      // Calculate the time until the end of the current circulation period
      if (minutes < 60) {
        minutes = 60 - minutes;
        seconds = 60 - seconds;
        hours += 1;
      } else {
        minutes = 0;
      }
      timeUntilNextCirculation = `${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s)`;
    }
  
    // Return the time until the next circulation period begins
    return timeUntilNextCirculation;
  }
  
  // Update the clock and date elements in the HTML with the current time and date
  function updateTime() {
    // Get the clock and date elements from the HTML
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
  
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Format the date as a string
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
  
    // Format the time as a string
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    // Update the clock and date elements in the HTML
    clockElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  
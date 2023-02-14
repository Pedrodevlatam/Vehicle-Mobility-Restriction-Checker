// Importing the checkLicensePlate and getTimeUntilNextCirculation functions from the functions.js file
import { checkLicensePlate, getTimeUntilNextCirculation } from "./functions.js";

// Selecting the form element with the ID of "license-plate-form"
const form = document.querySelector("#license-plate-form");

// Adding an event listener to the form for when it is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Preventing the form from submitting normally

  // Selecting the input element with the ID of "license-plate-input"
  const input = document.querySelector("#license-plate-input");

  // Getting the last digit of the input value
  const lastDigit = input.value;

  // Checking if the license plate is subject to mobility restrictions
  const result = checkLicensePlate(lastDigit);

  // If the license plate is subject to mobility restrictions, showing a message with the time until the vehicle can circulate again
  if (result) {
    const timeUntilNextCirculation = getTimeUntilNextCirculation();
    alert(`Your vehicle is subject to mobility restrictions. You can circulate again in ${timeUntilNextCirculation}.`);
  } else {
    // If the license plate is not subject to mobility restrictions, showing a message that the vehicle can circulate without restrictions
    alert("Your vehicle can circulate without restrictions.");
  }
});

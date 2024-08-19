// Step 1: Set the target date and time for the countdown
const targetDateTime = new Date("August 21 2024 15:59:00").getTime(); // You can change this date as needed

// Step 2: Create a function to calculate the remaining time and update the countdown display
function updateCountdown() {
    // Step 3: Get the current time in milliseconds
    const currentTime = new Date().getTime();

    // Step 4: Calculate the difference between the target time and current time
    const timeRemaining = targetDateTime - currentTime;

    // Step 5: Convert the time remaining into days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Step 6: Update the HTML elements with the calculated time values
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Step 7: Check if the countdown is over
    if (timeRemaining < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById("countdown").innerHTML = "Sale is live!"; // Display a message when the countdown ends
    }
}

// Step 8: Set an interval to update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

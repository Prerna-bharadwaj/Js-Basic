function displayCurrentDayAndTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    // Get current day and time components
    const currentDay = daysOfWeek[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format hours for 12-hour clock and determine AM/PM
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const period = hours < 12 ? "AM" : "PM";

    // Display the output
    console.log(`Today is : ${currentDay}.`);
    console.log(`Current time is : ${formattedHours} ${period} : ${minutes} : ${seconds}`);
}

// Call the function to display the day and time
displayCurrentDayAndTime();# 

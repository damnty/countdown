// Function to calculate the percentage of days that have passed
function calculatePercentagePassed(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
  
    // Ensure today is within the given date range
    if (today < start || today > end) {
      return 'Invalid date range';
    }
  
    const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));  // Calculate total days
    const daysPassed = Math.floor((today - start) / (1000 * 60 * 60 * 24)); // Calculate days passed
    const percentagePassed = ((daysPassed / totalDays) * 100).toFixed(2);  // Calculate percentage
  
    return `${daysPassed}/${totalDays} (${percentagePassed}%)`;
  }
  
  // Set the start date for the date range
  const startDate = '2023-08-25';
  
  // Set the end dates for the date ranges
  const endDate1 = '2024-03-01';
  const endDate2 = '2024-07-31';
  
  // Display the number of days and the percentage of days that have passed for each date range
  const percentage1 = calculatePercentagePassed(startDate, endDate1);
  const percentage2 = calculatePercentagePassed(startDate, endDate2);
  
  document.getElementById('countdown1').innerText = `Days passed until ${endDate2}: ${percentage1}`;
  document.getElementById('countdown2').innerText = `Days passed until ${endDate2}: ${percentage2}`;
  
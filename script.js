//Function to update countdown timer
function updateTimer(){
        const timerElements= {
                days: document.getElementById('days'),
                hours: document.getElementById('hours'),
                minutes: document.getElementById('minutes'),
                sec: document.getElementById('sec'),
                
        }
  //Calculate the remaining time
  let now= new Date();
  let eventDate= new Date ("02-29-2024, 11:30:00"); //Set your event date here.
  let timeRemaining= eventDate - now;
  
 if (timeRemaining<=0) {
         clearInterval(timerInterval);
         Object.values(timerElements).forEach(element => element.textContent = '00');
         return;
 }
   
    let days = Math.floor(timeRemaining / (1000 *24 * 60 * 60));
    let hours= Math.floor((timeRemaining % (1000*24*60*60)) / (1000*60*60));
    let minutes= Math.floor((timeRemaining % (1000*60*60))/ (1000*60));
    let sec= Math.floor((timeRemaining % (1000*60))/ (1000));


        //Update the timer elements
        timerElements.days.textContent = String(days).padStart(2,"0");
        timerElements.hours.textContent = String(hours).padStart(2,"0");
        timerElements.minutes.textContent = String(minutes).padStart(2,"0");
        timerElements.sec.textContent = String(sec).padStart(2,"0");

 

}


//Update the timer immediately to prevent to delay on initial load
updateTimer();

//Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

        //start the countdown automatically when the page loads
        window.onload = () => {
        updateTimer();
        };








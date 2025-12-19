/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let CostPerDay = 35;
let DaysSelected = 0;





/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let MondayButton = document.getElementById("monday");
MondayButton.addEventListener("click", clicked);
let TuesdayButton = document.getElementById("tuesday");
TuesdayButton.addEventListener("click", clicked);
let WednesdayButton = document.getElementById("wednesday");
WednesdayButton.addEventListener("click", clicked);
let ThursdayButton = document.getElementById("thursday");
ThursdayButton.addEventListener("click", clicked);
let FridayButton = document.getElementById("friday");
FridayButton.addEventListener("click", clicked);

function clicked() {
    event.target.classList.add("clicked");
    DaysSelected += 1;
    recalculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const ResetButton = document.getElementById("clear-button");
ResetButton.addEventListener("click", reset);

function reset() {
    MondayButton.classList.remove("clicked");
    TuesdayButton.classList.remove("clicked");
    WednesdayButton.classList.remove("clicked");
    ThursdayButton.classList.remove("clicked");
    FridayButton.classList.remove("clicked");
    recalculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let HalfDayButton = document.getElementById("half");
HalfDayButton.addEventListener("click", half);

function half() {
    HalfDayButton.classList.add("clicked");
    FullDayButton.classList.remove("clicked");
    CostPerDay = 20;
    recalculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let FullDayButton = document.getElementById("full");
FullDayButton.addEventListener("click", full);

function full() {
    FullDayButton.classList.add("clicked");
    HalfDayButton.classList.remove("clicked");
    CostPerDay = 35;
    recalculate();
    
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    let CostText = document.getElementById("calculated-cost");
    Cost = DaysSelected * CostPerDay;
    CostText.innerHTML = Cost;
}

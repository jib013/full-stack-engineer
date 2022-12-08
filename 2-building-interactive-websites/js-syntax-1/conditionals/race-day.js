/*

registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

*/

let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

//is registered or not
let registeredEarly = true;

//runner's age
let age = 18;

//Create a control flow statement that checks whether the runner is an adult AND registered early. add 1000 to the race number if it's true (adults have numbers 1000+)
if (registeredEarly === true && age > 18) {
  raceNumber += 1000;
}

//assigns race number for registrant
if (registeredEarly === true && age > 18) {
  console.log(`Your race number is: ${raceNumber}. Your start time is 9:30 AM.`)
} else if (registeredEarly !== true && age > 18) {
  console.log(`Your race number is: ${raceNumber}. Your starting time is 11:00 AM.`);
} else if (age < 18) {
  console.log(`Your race number is: ${raceNumber}. Your starting time is 12:30 PM.`);
} else {
  console.log(`Because you are exactly 18, please check in with the registration desk.`);
}


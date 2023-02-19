//IF...ELLSE

//Subjects for each class
let scienceSubjects = "Physics, Chemistry, Biology,and Technical Drwaing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, and Geography";
let artsSubjects = "Government, Economics, Literature, and History";
let generalSubjects = "English, Mathematics";

let chosenSubjects = socialScienceSubjects;

if (chosenSubjects == scienceSubjects) {
    console.log("You are to take " + generalSubjects + " " + scienceSubjects);

}else if (chosenSubjects == socialScienceSubjects) {
    console.log("You are to take " + generalSubjects + " " + socialScienceSubjects);

}else if (chosenSubjects == artsSubjects) {
    console.log("You are to take " + generalSubjects + " " + artsSubjects);

}else{
     console.log("These ones are compulsory, you should start with them: " + generalSubjects);
}



//Program that takes positive numbers and finds the power of 2 nearest to that number
let positiveNumber = 12;
let powerRaisedTo = 2;
console.log (positiveNumber ** powerRaisedTo);

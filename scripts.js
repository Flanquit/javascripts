//Warming up 

// var visitorName = prompt("What is your name");
// var massage = 'Hello ' + visitorName;
// document.write(massage);
//var welcome = prompt("Enter your name");
//var massage = 'Hie ' + welcome;
//document.write(massage);
//console.log('whats good')


//variables leacture 1 

var name = 'alpha';
console.log(name);

var age = 30;
console.log(age);

var married = true;
console.log(married);



//variables lecture 2

console.log(name + age);

var job, IsMarried;
job = 'Developer';
IsMarried = true;

alert('alpha is a ' + job + ' and is ' + age + ' with married status of ' + IsMarried);


//lecture 3 operators 
current_year = new Date().getFullYear();
DOB = current_year - age;
document.write('date of birth is ' + DOB + '<br\>'); 

//lecture 4 If/Else Statements using variable from above 

if (IsMarried = true) {
    document.write(name + ' is Married' + '<br\>');
} else {
    document.write(name + ' is Not Married' + '<br\>');
}

//using 3 = signs to compare
if (name === 'alpha') {
    document.write(name + ' is Alpha' + '<br\>');
} else {
    document.write(name + ' is Not Alpha' + '<br\>');
}


//leacture 5 usin boolean logoc and switch 
if (age < 19) {
    document.write(name + ' is a teenager' + '<br\>');
}   else if(age > 20 && age < 30){
    document.write(name + ' is a Young Man' + '<br\>');
}   else {
    document.write(name + ' is a man' + '<br/>');
} 

//with some errors
Job = prompt('What does alpha do ?');
switch (job){
    case 'code':
        document.write(name + ' write code' + '<br\>');
        break;
    case 'teach':
        document.write(name + ' Teaches stidents' + '<br\>');
        break;
    case 'police':
        document.write(name + ' Mupurisa' + '<br\>');
        break;
    default:
        document.write(' job not available in our database' + '<br\>');


}


//Coding Challenge 1 :
var alpha_age = 45;
var caleb_age = 25;
var tendai_age = 35;

var alpha_height = 2.5;
var caleb_height = 1.4;
var tendai_height = 1.5;


alpha_score = alpha_age + alpha_height * 5;
caleb_score = caleb_age + caleb_height * 5;
tendai_score = tendai_age + tendai_height * 5;


if (alpha_score > caleb_score && alpha_score > tendai_score) {
    document.write('The winner is Alpha with ' + alpha_score + '<br\>');
} else if (alpha_score === caleb_score && caleb_score  === tendai_score){
    document.write('its a draw of ' + alpha_score + '<br\>');
} else if(caleb_score > alpha_score && caleb_score > tendai_score){
    document.write('The winner is Caleb with ' + caleb_score + '<br\>');
} else if(tendai_score > alpha_score && tendai_score > caleb_score){
    document.write('The winner is Caleb with ' + tendai_score + '<br\>');
} else{
    document.write('There is a Draw' + '<br\>');
}


// Function lectures 
////////////////////////////////////////////////////////////////

function calculateAge(yearOfBirth){
    var age = current_year - yearOfBirth;
    return age;
}

var alpha_age = calculateAge(1989);
document.write('alpha age is ' + alpha_age + '<br\>');


//function with 2 aguments 

function CalculateRetirement(name , year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement < -1) {
        document.write(name + ' Has already retired' + '<br\>');
    } else {
        document.write(name + ' will retire in ' + retirement + ' years to come' + '<br\>');
    }
}


CalculateRetirement('alpham', 1954);

//function statements and expressions 

function someFun(par){
    //code
}

var someFun = function(par){
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements 
if (x === 5){
    //Do something
}
 var names = ['alpha', 'caleb', 'tendai'];
 var years = ['1989', '1993', '1991'];

 console.log(names[0]);

 var alpha = ['alpha', 'Muchechesi', 1989, 'baba' ];
 //add element at the end 
 alpha.push('blue');
//add element at the begining 
alpha.unshift('MR.');
//remove the last element from the array 
alpha.pop();
//remove element from the begining
alpha.shift();

 console.log(alpha);

 //-1 is a way to check if the mentioned index 
 //of is not available inside the provided array 

 if (alpha.indexOf('Developer')=== -1) {
    console.log('alpha is not a Developer');
 }



/////////////////////////////////////////////////////////////
 // Lecture Objects 
/////////////////////////////////////////////////////////////
 var alpha = {
     name : 'alpha',
     surname: 'Muchechesi',
     yearOfBirth : 1989,
     job : 'Developer',
     IsMarried : false,
 };

 console.log(alpha.surname);

 var xyz = 'job';
 console.log(alpha[xyz]);

 //changing objects conntents 
 alpha.surname = 'Flanquit';
 console.log(alpha);



 /////////////////////////////////////////////
 //Objects and Methods 
 //////////////////////////////////////////////

 var alpha = {
    name : 'alpha',
    surname: 'Muchechesi',
    yearOfBirth : 1989,
    job : 'Developer',
    IsMarried : false,
    family: ['Tendai', 'Mom', 'Dad', 'Caleb', 'Sydney'],
    calculateAge: function(){
        return current_year - this.yearOfBirth;
    } 
 };

 console.log(alpha.family);
 console.log(alpha.calculateAge());
 
 //insert a new variable into an oblject 
 var age = alpha.calculateAge();
 alpha.age = age;
 console.log(alpha);






 ///////////////////////////////////////////////////
 //LOOPS 
 /////////////////////////////////////////////////
  for (var i = 0)
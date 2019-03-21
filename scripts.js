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
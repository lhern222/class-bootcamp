// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);//false 
var expression2 = (x > 50);//true

// Write Your JavaScript Code Here


// my work 
if (expression1 <= 50) {
    console.log(true)
}

if (expression2 <= 50){
    console.log(true)
}

if (expression1 == true) {
    console.log(false);
} else {
    console.log(true)
} 

if (!expression2) {
    console.log(true);
} else {
    console.log(false)
}

if (x > 25) {
    console.log(false);
} else if (x < 50) {
    console.log(false);
} else{
    console.log(true)
}
// below is the correct answer
if (expression1 && expression2) {
    console.log('true false');
} else if (expression1) {
    console.log('false true');
}else {
    console.log('fasle false');
}


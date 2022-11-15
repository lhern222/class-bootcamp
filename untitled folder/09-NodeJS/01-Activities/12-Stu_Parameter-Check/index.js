const a = process.argv[2];
const b = process.argv[3];

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}

//using a ternary operator 
console.log(a===b ? true:false)

//comparing variables 
console.log(a===b);


//comparing arguments values directly
console.log(process.argv[2]===process.argv[3]);


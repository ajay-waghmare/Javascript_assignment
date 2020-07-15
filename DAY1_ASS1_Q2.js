var x = 14;
x = 12;
console.log(x); //12
12;
//from the above code we successfully changed the value of variable from 14 to 12
let x = 14;
x = 12;
console.log(x);
//from the code above we successfully changed the value of variable from 14 to 12
const y = 14;
y = 12; //TypeError: Assignment to constant variable.
console.log(y);
//From the code above with const when we run the program got the type error that value of const cannot be changed.
function adult5(age) {
    if (age > 18) {
        var status = 'adult';
    }
    console.log(status); //adult
}
adult5(20);
//The above example gives output ‘adult’, the var status can be accessed anywhere in the function.
function adult6(age) {
    if (age > 18) {
        let status = 'adult';
    }
    console.log(status); //ReferenceError: status is not defined
}
adult6(20);
//example gives us an error that status is not defined.
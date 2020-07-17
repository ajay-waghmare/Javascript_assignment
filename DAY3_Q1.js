function odd_even() {
    var no = window.prompt("Enter a number: ");
    if (no % 2 == 0) {

        document.write("The Number Entered is " + no + "  and it is even");
        a = "The Number Entered is " + no + "  and it is even"
        console.log(a)


    } else {

        document.write("The Number Entered is " + no + "and It Is Odd");
        a = "The Number Entered is " + no + "  and it is odd"
        console.log(a)
    }
}
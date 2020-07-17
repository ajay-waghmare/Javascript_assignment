var G = window.prompt("Enter your grade ")
if (G >= 95) {
    console.log('A');
} else if (G >= 85) {
    console.log('B');
} else if (G >= 75) {
    console.log('C');
} else if (G >= 60) {
    console.log('D');
} else if (G >= 40) {
    console.log('E');
} else {
    console.log('FAIL');
}

switch (G) {
    case 95:
        console.log("A");
        break;
    case 85:
        console.log('B')
        break;
    case 75:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 40:
        console.log("E");
        break;
    case 35:
        console.log("FAIL");
        break;
    default:
        console.log('Enter valid input');
}
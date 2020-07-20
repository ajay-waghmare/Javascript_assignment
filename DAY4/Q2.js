const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        dicegame: "Two player dice game using JavaScript"
    }
}
for (key in student) {
    console.log(`The key is ${key} and the value is ${student[key]}`);
}
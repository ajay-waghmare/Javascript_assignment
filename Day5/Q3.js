console.log("Promises");

let users = [{
        name: 'mumbai',
        email: 'm@gmail.com',
    },
    {
        name: 'pune',
        email: 'p@gmail.com',
    },
    {
        name: 'nagpur',
        email: 'n@gmail.com',
    },
]

function getUsers() {
    setTimeout(() => {
        let result = '';
        users.forEach(user => {
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    }, 1000);
}
const photos = [];
async function photoUpload() {
    let status = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push('sync');
            resolve('Profile Updated');
        }, 3000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))

let obj = {
    userId: 254,
    title: "Assignment  ",
    body: 'santosh is good human being',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj)
    }).then(response => response.json())
    .then(data => console.log(data))


// jokes api

async function fetchJokes() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log(data);
}

fetchJokes();


let obj1 = {
    name: 'Ajay Waghmare',
    age: 20,
    canDrive: true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)
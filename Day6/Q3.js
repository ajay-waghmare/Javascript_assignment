const list = document.querySelector('#list');
console.log(list);

fruits.forEach(fruit => {
    list.innerHTML += `<li>${fruit}</li>`;
})

dataarr.forEach(para => {
    if (para.innerText.includes('amet')) {
        para.classList.add('highlight');
    }
})

function showAlert() {
    alert("Hey I am an alert from the button");
}

const button = document.getElementById('btn');

button.onclick = function() {
    alert("Hey I am an alert from the button");
}
const dmode = document.getElementById('dark');

dmode.onclick = function changeColor() {

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';

}
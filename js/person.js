console.log('This is a test');

const name = 'Martin-Matthias Kruus';
const age = 19;
const job = 'Student'
const city = 'Tallinn'
const gender = 'Male'

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(job));
console.log(typeof(city));
console.log(typeof(gender));

function hello(){
    return 'hello';
}

const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);

//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday : 'long', year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

const html = `
<h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>

`;

document.body.innerHTML = html;
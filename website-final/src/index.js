import Hello from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const people = {
    emeralds: 450,
    jesusChrist: 40000,
    Johnny: 'Appleseed'
}

function How(props) {
    return (
        <div>
            <h1>Hey I remember you!</h1>
            <h2>Your name is {props.name}</h2>
        </div>
    );
};
/*
    This function simply takes in an argument of the number of Array elements 'times' 
    and creates an Array with the same number of specified elements. 

    Each specific element will 'filled' to be made static for webpage display. The fill 
    function essentially starts at the 1st index and continues until the end of the Array. 

    Map function essentially takes in a count of an element 'i', and then maps the phrase
    `Hello ${i + 1}` to each element in the Array from start to finish. 

    When joining the "lambda" 'loopHello' into the actual static HTML page, we simply 
    create a new element div through "const name = document.createElement(`div`)"

    Next, we simply append the div information to the `name` constant variable through...

    name.innerHTML = loopHello(10).join(`<br/>`);

    In order to view this newly created div inside of our HTML document, we simply 
    append the div to the body tag of the HTML document as such...

    document.body.append(name);
*/

const helloRet = document.getElementById('root');
const root = createRoot(helloRet);

root.render(
    <>
    <Hello />
    <How name="Jeremiah"/>
    </>
    );

const loopHello = (times) => 
    new Array(times).fill(1).map((_, i) => `Hello from index.js ${i + 1}`);

const newDiv = document.createElement(`div`);
newDiv.innerHTML = loopHello(10).join(`<br/>`);

console.log(people);

document.body.append(newDiv);
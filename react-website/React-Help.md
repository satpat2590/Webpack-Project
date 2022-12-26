# This file will explain React Syntax


## Components

Components can be called as functions within a .jsx or a .tsx file. These files do not require the extension .jsx or .tsx, as merely
importing the React libraries within an existing .js or .ts file will be sufficient. 

Components in React can be written as functions, with certain properties, or props, that can be passed to them. 

```javascript
function Function(props) { // The "component" that React has 
    return ( // This return function will return valid Markdown for use in the HTML page. 
        <div>
            <h1>Hey I remember you!</h1>
            <h2>I believe your name was {props.name}</h2>
        </div>
    );
}
/*
// Remember, your index.html file will contain a div with an id value of 'root' 
//
// By creating a root at the document's (index.html) div id of 'root', you can insert
// other components and create nesting. 
//
// We can import our Markdown from the Function component by simply calling it as a Markdown element
// within the render subfunction within the variable 'rootApply' (which points to the 'root' div in the index.html file)
*/ 
const rootApply = createRoot(document.getElementById(`root`)); 
rootApply.render(<Function name="Jeremiah"/>);
```

As shown above, the function will simply be a component that can be called within render functions. 

You can make multiple functions as components in various .jsx files and then export them to the index.js file for use. 

It's easy to see how you can simply create new components within each new function. 

For the website, the most viable solution would be to create the header of the personal website as a component and reuse them in every 
subsequent page. 
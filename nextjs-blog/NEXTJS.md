# Full guide to Using Next.js Framework for deploying websites on Vercel. 

In our prior build of the website, we used regular HTML, CSS, and JavaScript (Express.JS)
to build our static pages and deploy them to Vercel. Express acts as a 'router' for your page, so that it works. 

Next, we created an application using JavaScript, React.js (JS Library), Webpack (Minimization of files), and 
Babel (backwards compatibility with older web versions [ES5, ES6, etc..]). 

Now, we are going one step forward and learning how to create a Next.js application, which is built on top of the 
React library, while also utilizing Webpack and Babel internally. As Next.js is a FRAMEWORK, it incorporates a lot of 
the libraries and components that you would have need to done manually. 


## Routing

Routing in Next.js is done through an imported library with the following syntax: 

```javascript
import Link from 'next/link'; 
```

Once that is imported into your desired JavaScript file, you can use them in any valid JSX/TSX syntax,
which takes the form of: 

```javascript
function Example() {
    return (
        <div>
            <h1>
            <Link href="pages/about">Click here to access my About page!</ Link>
            </h1>
        </div>
    );
};

export default Example; 
```

In our example above, we simply create a route from our Example component to our About page.
Depending on where we insert this Example component on the website, we will also be able to 
access our About page from that location. 


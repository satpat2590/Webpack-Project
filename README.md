# Welcome to the Land of Websites


Currently, there are two different website builds in this repository, 
along with their specific README and documentation. Here is the list of projects worked on thus far: 

## 1. React.js/Webpack/Babel  

Build: npm run build 

Deploy: npm run watch 

Note: You can always change the scripts for deployment in the package.json file. Currently, our build
and serve features are handled through the Webpack executable. Webpack simply takes the source files (index.js) and 
creates an output file that corresponds to our index.html. 


## 2. Next.js Framework 

Build: npm run build

Deploy (dev): npm run dev

Deploy (production): npm run start

Note: You can always change the scripts for deployment in the package.json file. Currently, our build
is handled by the Next.js framework. Thus, the build script would simply run the commands (next build). Make sure that if you're 
running the commands without the scripts in the package.json, that you include the npx prefix before. So, to call the command, you simply run: 

npx next build || npm run build 

These two commands are equivalent. Use either one. 

## 3. Personal Website

Build: npm run build

Deploy (dev): npm run dev

Deploy (production): npm run start

I utilized the base Next.js starting template website, and added some personal information that corresponds to my particular 
portfolio. Currently, my website which was deployed using Express.js and only using basic Bootstrap, is hosted on https://www.sbpatel.dev 

I am using this repository mainly to teach myself and others stumbling upon this page about basic Web Development, as well as my own progress. 

Currently, my website has a number of different pages which correlate to my overall portfolio, as well as some fun personal information. 

Here is the layout of the current project directory structure: 

|-- components
|   |-- about.module.css
|   |-- header.js
|   |-- header.module.css
|   |-- layout.js
|   |-- poetcard.js
|   |-- poetcard.module.css
|
|-- pages
|   |-- _app.js
|   |-- about.js
|   |-- contact.js
|   |-- index.js
|   |-- projects.js
|   |-- projects
|       |-- lutron.js
|       |-- os.js
|       |-- poetry.js
|       |-- timeline.js
|       |-- poems
|           |-- darkness.js
|           |-- defintion.js
|           |-- deteriorating.js
|           |-- narcissism.js
|           |-- obscurity.js
|           |-- philosophy.js
|           |-- philosophy2.js
|           |-- split.js
|           |-- unattainable.js
|
|-- public
|   |-- favicon.ico
|   |-- original.jpg.webp
|   |-- profile-image.JPG
|   |-- images
|       |-- [Most (All) of the images throughout the site are here!]
|
|-- styles
|   |-- basteleur-master
|   |-- bizmeud
|   |-- Daubenton-master
|   |-- fonts
|       |-- [All Switzer fonts are located here (.ttf, .woff, .woff2, etc..)]
|   |-- globals.css
|   |-- Home.module.css
|   |-- uploadfont.sh
|
|-- package.json


The two files _app.js and layout.js are the ones that display the entire page. Deploy the application locally or via production and take a look at the source code via the browser developer tools. Notice how the layout of the page is the only thing that changes, or, the body. Both the HEADER and the FOOTER are consistent throughout any page of the application. 

Instead of manually writing the HTML elements for each page, and copying the header and footer to each .html page, you can simply 
define the header and the footer once, and use them in all various pages. 

Components are also used by the JavaScript files in the 'pages' folder. Components are meant to be reusable parts of the application, hence why they're named as such. Components are referenced into the actual exported page functions via calls in the JSX/TSX, or the return value of the exported function. 

Calls are conducted as such. 

```javascript
import [Component] from '../components/[component-name].js';

export default function App () {
    return (
        <>  
            <[Component]/>

            // Insert other JSX, TSX here... 
        </>

    );
}
```

MAKE sure that the imported value has a first letter which is capitalized.

The reason why is because in normal HTML, each element is always in lower case. Examples are: 

div
header
head
style
nav
h1
h2
...


Including an upper-case beginning of the component name serves to differentiate between our own custom components/elements and the ones predefined by normal HTML. 

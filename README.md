# Project Structure

## 1. ./dist/

    Dist folder contains the webpack assembled beginning JavaScipt file and then outputs it within the dist folder. The dist also contains the HTML file. 

    This folder will be continuously reinstalled, so changes will NOT be pushed to the GitHub. 

## 2. ./src/

    Src folder will contain all of the JS, TS, TSX, or JSX files that you will need in order to compile into the one final .js file within the dist folder. Src may also contain any CSS or SCSS files for styling. 

## 3. ./package.json

    The package.json contains the scripts for building the entire application. There is a development build script, a deployment build script, and one for general testing. 

    All of the dependencies as node modules are also listed within this file. Note that not ALL of the production-required 
    dependencies are listed below. 

    You will need to install dependencies that you need for your custom application. 

    A really well made resource for configuring your front-end web-development project is this website: https://createapp.dev/

```javascript
{
    "name": "website-final",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": { // run any of these scripts using the syntax 'npm run [scriptName]' to execute the specified script. 
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack" // running 'npm run build' will execute 'webpack' and build the files within webpack.config.js
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": { // Includes all of the dependencies downloaded through "npm install ... --save-dev" 
        "@babel/core": "^7.20.7", 
        "@babel/preset-env": "^7.20.2",
        "@babel/preset-react": "^7.18.6",
        "babel-loader": "^9.1.0",
        "html-webpack-plugin": "^5.5.0",
        "react-dom": "^18.2.0",
        "webpack": "^5.75.0",
        "webpack-cli": "^5.0.1",
        "webpack-dev-server": "^4.11.1"
    }
}
```

## 4. ./webpack.config.js

    Webpack.config.js is the configuration file for Webpack. This tells webpack which file to use as the source, and also which directory to output it as well as the name. 

    Webpack is suitable for also using different "loaders". Loaders are capable of essentially breaking down any file type into another one. For example, you can use a 'ts-loader' to compile from a .ts file to a .js file. Also, you can use babel as a loader to convert .js files to ES5 format, which is essentially backwards compatibility. 

    You can optionally also use a 'style-loader', 'css-loader', and a 'sass-loader' for .css and .scss files. 

    Example: 

```javascript
    const path = require('path'); // This essentially exports the entire environment path for the package manager 

    module.exports = { 
    entry: './src/index.js', // The entry point for the scripting files needed to build the application 
    output: {
        filename: 'bundle.js', // After compilation of the 'entry' files, they're renamed to [filename] and send to 'path'
        path: path.resolve(__dirname, 'dist'), // Minimized/compiled 'entry' files will then be moved to the folder 'dist'
    },
    };
```

    The above configuration will work if you only need your index.html file to be working properly. In fact, to render the index.js file into your HTML file, you will need to add a series of dependencies that will take your pre-existing index.html file and format them as to include the .js files as "scripts" in your static page. 

    Keep in mind that our .js files will not only be JavaScript, but they're React.js files with extensions of .jsx and .tsx. React is important because you can insert elements into the body of an HTML page by simply creating those elements in a Javascript/Typescript file containing the React and ReactDOM modules/dependencies. 
 

```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to render script code on HTML files
    const path = require('path');

    module.exports = {
        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist') // Remember, our 'index.js' file will be renamed to 'bundle.js' and moved to './dist'
        },

        devServer: { // Specify development server configurations... 
            port: 3000
        },
        
        plugins: [
            new HtmlWebpackPlugin({ // Takes already existing index.html from './public/' and moves it to the same output file ('build')
                template: path.resolve(__dirname, "public", "index.html"), 
            }),
        ],

        mode: "development" // Specify compilation mode... either for production (minified files) or development 
    }
```

## Additional Helpful Tips


### 1. 

You can check which browsers your application supports by running... 
```bash
    npx browserslist
```

Browser configuration can be changed through the .browserslist file in the root repository. 

### 2.

You can serve a static folder to be hosted locally by running...
```bash
    npx serve [foldername]
```

Also, the serve feature can be used through the command...
```bash
    npx webpack watch
```


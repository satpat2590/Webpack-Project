

# This command below will install all of the node dependencies required for this project.

# Project Details: 

# Creating a deployable website using Webpack for compilation and packaging, React for UI design (JSX, TSX), and Babel for 
# compilation into ES6 format for browsers to render static files. All of the dependencies listed below are required. 

# ONLY RUN THIS FILE ONCE IN THE BEGINNING. SUBSEQUENT CALLS WILL NOT RESULT IN ANY DOWNLOADS. 

npm install webpack webpack-cli html-webpack-plugin webpack-dev-server @babel/core @babel/preset-env babel-loader react-dom @babel/preset-react --save-dev
npm install react react-dom react-hot-loader
npm install ts-loader sass-loader style-loader css-loader babel-loader --save-dev
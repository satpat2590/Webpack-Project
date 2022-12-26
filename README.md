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
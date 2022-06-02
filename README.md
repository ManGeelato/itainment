###I-TAINMENT

##Author
Emmanuel Kaome

To run this app, download and install node js, open directory where this app sits and install dependencies first by running npm install then run your api by typing npm run server. this will run your api on port 8081 and make sure you add route: /results like http://localhost:8081/results.

Thereafter, open the Frontend folder and redirect to itainment folder, install dependencies first by npm install then run npm start to start your react application. Once both api and client are in live, you can search your favourite media.

###Steps done and front-end dependencies
npx create-react-app itainment
npm i react-bootstrap
npm i react-icons
npm i react-router-dom
npm add --dev react-test-renderer

###Frotn-end folder structure
```
Frontend/itainment/public/src
                        Home.test.js
                            /components/Categories.js/Faourites.js/Feed.js/Footer.js/Home.js/Home.test.js/Navbar.js/Search.js
                            /css/bootswatch.css
                            /App.js
                            /Comments.txt
                            /index.js                  
/**Steps done and back-end dependencies**/
npm init
npm i express
npm i axios
npm i helmet
npm i cors
npm i --save-dev mocha chai

###Back-end folder structure
```
Backend/environmemt
       /testing/server.test.js 
       /Comments.txt
       /server.js

###Testing
Application has been tested using Mocha and Chai for back-end and Jest, react-test-renderer for front-end 

###I deployed this app at: https://itainment.herokuapp.com/

Thank You

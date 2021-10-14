Installation To initialise the project you will need to install several dependencies. these are as follows: dependencies: body-parser: 1.19.0 chalk: 4.1.2 express: 4.17.1 nedb: 1.8.0 devDependencies jest: 27.2.4 nodemon: 2.0.13 supertest": 6.1.6
to do this run the following commands in your vsc terminal: "npm i body-parser chalk express nedb --save" for dependencies" "npm i jest nodemon supertest --save-dev" for development dependencies"
Running the application In order to run the application, from your vsc terminal run: "npm start" API Listening on http://localhost:8080
Stopping the application In order to stop the application from the vsc terminal that is running the server press CTRL + C
Running on a different port To start the application on an alternative port to the default (8080) from your vsc terminal run:
$ PORT=5000 npm start API Listening on http://localhost:5000
Functionality n.b: For these commands anything surrounded by angled braces <> needs to be replaced by you
CREATE To create the example product run the command:
"curl -s -X POST http://localhost:/product/create -H 'Content-type:application/json' -d '{"name":"example product", "description":"this is an example", "price":9.99}'" READ (all) To read all of the products run the command:
"curl -s -X GET http://localhost:/product/read" READ (one) To read one of the products run the command:
"curl -s -X GET http://localhost:/product/read/" UPDATE To update one of the products run the command:
"curl -s -X PUT http://localhost:/product/update/ -H 'Content-type:application/json' -d '{"name":"updated product", "description":"its brand new", "price":99.99}'" DELETE To delete one of the products run the command:
"curl -s -X DELETE http://localhost:/product/delete/" Testing To run tests, from the terminal run the command:
$ npm test

:-)

# My first API REST, BOOKS & USEERS

This project is a basic API REST. The database was created whit Mongo Atlas and the server whit EXPRESS. It is a simulation of a public library's database. It has two models, Books and Users

## Technologies

Node.js
javaScript
mongoDB
Insomnia

## Dependencies

Nodemon
express
dotenv
mongoose

## API URL

http://localhost:3000

To make the requests you must add to the API's url, (http://localhost:3000), the following:

/api/v1/books to make request of books.

/api/v1/users to make request of users.

and then add the ENDPOINTS DESCRIBED BELOW

## ENDPOINTS

#### USER

get('/:id', getUserById) get a user by ID

get('/getByName/:name', getUserByName) get the users by name

get('/getUser/:borrowedBooks') get the users by borrowed Books

get('/', getAllUsers) get all the users

post('/', postUser) create a new user

put('/:id', updateUser) update a user

userRoutes.delete('/:id', deleteUser) delete a user

#### BOOKS

get('/:id', getBookById) get a book by ID
get('/getByGenre/:genre', getBookByGenre) get the books by a genre
get('/getByPages/:pages', getBookByPages)get the books by pages
get('/', getAllBooks) get all the books
post('/', postBook) create a new user
put('/:id', updateBook) update a user
delete('/:id', deleteBook) delete a user

##### important

there is not front end, you have to make the request by INSOMNIA or the technology of your choice.

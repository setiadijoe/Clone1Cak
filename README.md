Clone1Cak
===========

Pair project create cloning of 1CAK mobile apps for educational purpose

Our app using react-native, react-redux, redis for frontend and back end using expressjs for api

MVP
----

Using upload feature. Every posted picture can be commented. CRUD posted pictures

SCHEMA OF COLLECTIONS
---------------------

We have two (3) collections. The first is users, memes and comments. Schema for users are:

1. Name type String
2. User Name type String
3. Password type String
4. Age type Number
5. Email type String

Schema for memes are:

1. Title type String
2. Image URL type String
3. Author type ObjectType of Users Id
4. Funny type array or ObjectType of Users Id
5. Created At type Date
6. Updated At type Date

Schema for comments are:

1. Content type String
2. Author type ObjectType of Users Id
3. Meme type ObjectType of Memes Id
4. Created At type Date
5. Updated At type Date

SERVER API
----------

There are some api lists that can be use, first for login and register

List of Routes:

| Route	| HTTP	| Description |
|`/users/signup`|	POST	| Sign up with new user info |
|`/users/signin`|	POST	| Sign in while get an access token based on credentials|
|`/users`|	GET	|Get all the users |

For API of memes

| Route | HTTP | Description |
| `/api/memes/` | GET | Get all memes |
| `/api/memes/:userid` | GET | Get all memes from login user | 
| `/api/memes` | POST | Create a meme | 
| `/api/memes/:id` | DELETE | Delete a meme | 
| `/api/memes/:id` | PUT | Update a meme with new info |

For API of comments

| Route | HTTP | Description | 
| `/api/comments/` | GET | Get all comments | 
| `/api/comments/:memeid` | GET | Get all comments from spesific meme | 
| `/api/comments/:memeid` | POST | Create a comments for spesific meme | 
| `/api/comments/:id` | DELETE | Delete a comment | 
| `/api/comments/:id` | PUT | Update a comment with new info |

For using this api you must install npm or yarn

then use `yarn install` or `npm install`, and then create your `.env` file and run using `yarn run dev` or `npm run dev` It will run in port `3001`
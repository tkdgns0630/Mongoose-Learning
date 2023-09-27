# Social media backend Mongoose.
## Description

This application builds a back-end for a social media platform using node, express, and mongoose. Crud application for restful API.
Instructions are as follows.

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Technologies](#technologies)
- [Credits](#credits)

## Installation

npm install,
node index.js

## Usage

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Routes

Get All Thought (GET)
localhost:3001/api/thoughts
Get Single Thought(GET)
localhost:3001/api/thoughts/65126b8ac98cad46c7bf5d2a
CreateThought (Post)

localhost:3001/api/thoughts

{
  "thoughtText": "Here's a cool thoughtasd...",
  "username": "lernantinasdo",
  "userId": "651111a2daf6ec342935d131"
}

localhost:3001/api/thoughts
Update Thought(PUT)
localhost:3001/api/thoughts/651277399f8c7a6749689ede
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
Delete Thought(DELETE)
localhost:3001/api/thoughts/651288b10bbbb0da25d31587
Add Reaction
localhost:3001/api/thoughts/651288b10bbbb0da25d31587/reaction
{
  "reactionBody": "leasdrnantino",
  "username": "lernanasdasdtino@gmail.com"
}
Remove Reaction
localhost:3001/api/thoughts/651288b10bbbb0da25d31587/reactions/ 651294458a714bb040cb8d18


Get Users (get)
localhost:3001/api/users
Get SingleUser (get)
localhost:3001/api/users/ 651111a2daf6ec342935d131
Create User (Post)
localhost:3001/api/users
{
  "username": "lernantiasdasdno",
  "email": "lernanasdatino@gmail.com"
}
DeleteUser (delete)
localhost:3001/api/users/651111a2daf6ec342935d131
AddFriend (post)
localhost:3001/api/users/651111a2daf6ec342935d131/friends/651275ca9f8c7a6749689edc
Remove Friend (delete)
localhost:3001/api/users/651111a2daf6ec342935d131 /friends/651275ca9f8c7a6749689edc

## Technologies

- node.js
- Express
- Mongoose
- nodemon
- moment


## Credits

Sanghun Yun,
Bootcamp learning materials,
Moment Doc.

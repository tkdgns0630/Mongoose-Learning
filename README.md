## VIDEO ROUTE
https://drive.google.com/file/d/1ly-3A8oswtIm3WfK5JYBC6neZqHYcO8h/view

# Social media backend Mongoose.
## Description

This application builds a back-end for a social media platform using node, express, and mongoose. Crud application for restful API.
<br />
Instructions are as follows.
<br />
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Technologies](#technologies)
- [Credits](#credits)

## Installation

npm install
<br />
node index.js

## Usage

GIVEN a social network API<br />
WHEN I enter the command to invoke the application<br />
THEN my server is started and the Mongoose models are synced to the MongoDB database<br />
WHEN I open API GET routes in Insomnia for users and thoughts<br />
THEN the data for each of these routes is displayed in a formatted JSON<br />
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br />
THEN I am able to successfully create, update, and delete users and thoughts in my database<br />
WHEN I test API POST and DELETE routes in Insomnia<br />
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list<br />

## Routes

Get All Thought (GET)<br />
localhost:3001/api/thoughts<br />
Get Single Thought(GET)<br />
localhost:3001/api/thoughts/65126b8ac98cad46c7bf5d2a<br />
CreateThought (Post)<br />

localhost:3001/api/thoughts<br />

{<br />
  "thoughtText": "Here's a cool thoughtasd...",<br />
  "username": "lernantinasdo",<br />
  "userId": "651111a2daf6ec342935d131"<br />
}<br />

localhost:3001/api/thoughts<br />
Update Thought(PUT)<br />
localhost:3001/api/thoughts/651277399f8c7a6749689ede<br />
{<br />
  "thoughtText": "Here's a cool thought...",<br />
  "username": "lernantino",<br />
  "userId": "5edff358a0fcb779aa7b118b"<br />
}<br />
Delete Thought(DELETE)<br />
localhost:3001/api/thoughts/651288b10bbbb0da25d31587<br />
Add Reaction<br />
localhost:3001/api/thoughts/651288b10bbbb0da25d31587/reaction<br />
{<br />
  "reactionBody": "leasdrnantino",<br />
  "username": "lernanasdasdtino@gmail.com"<br />
}<br />
Remove Reaction<br />
localhost:3001/api/thoughts/651288b10bbbb0da25d31587/reactions/ 651294458a714bb040cb8d18<br />


Get Users (get)<br />
localhost:3001/api/users<br />
Get SingleUser (get)<br />
localhost:3001/api/users/ 651111a2daf6ec342935d131<br />
Create User (Post)<br />
localhost:3001/api/users<br />
{<br />
  "username": "lernantiasdasdno",<br />
  "email": "lernanasdatino@gmail.com"<br />
}<br />
DeleteUser (delete)<br />
localhost:3001/api/users/651111a2daf6ec342935d131<br />
AddFriend (post)<br />
localhost:3001/api/users/651111a2daf6ec342935d131/friends/651275ca9f8c7a6749689edc<br />
Remove Friend (delete)<br />
localhost:3001/api/users/651111a2daf6ec342935d131 /friends/651275ca9f8c7a6749689edc<br />

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

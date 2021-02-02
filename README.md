# Eye Site API

# Summary

Discover videos about eyes, for eyes.
Submit your own eye inspired work.
Like and comment to connect with other eye lovers.

# API Documentation

This API uses GET and POST requests to communicate and HTTP response codes to indenticate status and errors. All responses come in standard JSON. All requests must include a content-type of application/json and the body must be valid JSON.

For POST requests, tokens are required from client side [Auth0](https://auth0.github.io/auth0.js/index.html) login.

# URL

https://enigmatic-brook-32003.herokuapp.com/api

# Method:

GET /videos

# Sample Call:

>fetch(url + '/videos', {
>method: "GET",
>headers: {
>"content-type": "application/json",
>},
>})

# Success Response:

>Code: 200
>Content: [
>{
>"id": 1,
>"title": "eye love you",
>"author": "Amy Frear",
>"url": "https://www.youtube.com/embed/nzs-BK9gAuU?rel=0",
>"eye": "https://enigmatic-brook-32003.herokuapp.com/images/asset-1.png",
>"pink_eye": "https://enigmatic-brook-32003.herokuapp.com/images/pink-eye-1.png"
}
]

# Method:

GET /comments

# Sample Call

>fetch(url + '/comments', {
> 
>method: "GET",
>
>headers: {
>
>"content-type": "application/json",
>
>},
>
>})

# Success Response:

>Code: 200
>Content: [
>{
>"id": 1,
>"video_id": 1,
>"user_name": "eye_friend",
>"content": "Love this!",
>"modified": "2021-02-02T03:55:29.844Z"
>}
>]

# Errors:

>Code: 400
>Message: 'Missing <key> in request body'
>
>Code: 404
>Message: 'Comment does not exist'

# Method:

POST /comments

# Sample Call

>const newComment = {
>modified: new Date(),
>user_name: eye_friend,
>video_id: 1,
>content: "I love eyes!",
>};
>
>fetch(url + '/comments', {
>method: "POST",
>headers: {
>"content-type": "application/json",
>Authorization: `Bearer ${token}`,
>},
>body: JSON.stringify(newComment),
>})

# Success Response:

>Code: 201
>Content: [
>{
>id": 7,
>"video_id": 1,
>"user_name": "eyes_for_president",
>"content": "Woo!! eye love this!",
>"modified": "2021-02-02T16:18:00.447Z"
>}
>]

# Errors:

>Code: 400
>Message: 'Missing <key> in request body'

# Method:

GET /likes

# Sample Call

>fetch(url + '/likes' {
>method: "GET",
>headers: {
>"content-type": "application/json",
>},
>})

# Success Response:

>Code: 200
>Content: [
>{
>"id": 1,
>"video_id": 1,
>"user_name": "eye_friend"
>}
>]

# Errors:

>Code: 400
>Message: 'Missing <key> in request body'
>
>Code: 404
>Message: 'Comment does not exist'

# Method:

POST /likes

# Sample Call

>const newLike = {
>video_id: 1,
>user_name: eye_friend,
>};
>
>fetch(config.API_ENDPOINT_likes, {
>method: "POST",
>headers: {
>"content-type": "application/json",
>Authorization: `Bearer ${token}`,
>},
>body: JSON.stringify(newLike),
>})

# Success Response:

>Code: 201
>Content: [
>{
>"id": 7,
>"video_id": 1,
>"user_name": "eyes_for_president",
>"content": "Woo!! eye love this!",
>"modified": "2021-02-02T16:18:00.447Z"
>}
>]

# Built with:

Node

Express

PostgreSQL

# Example of use: 

https://eyesite.club/

# Client repo:

https://github.com/a-frear/eye-site

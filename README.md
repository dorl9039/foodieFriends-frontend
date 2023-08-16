# FoodieFriends - Frontend

FoodieFriends is a social media and lifestyle web application for tracking restaurants and connecting with friends over food.

A user can add and organize the restaurants they want to try out, mark a restaurant as visited with friends, and add rankings and comments to each wish or visit record. A friend who has the same restaurant on their wishlist will show up as a suggested FoodieFriend, so it's easy for users to find company for trying out new restaurants!

This app was created using a PERN (with Typescript) techstack.

## Demo
### Add and organize restaurants in wishlist and history
Users can organize, edit, sort, and use the search bar to filter their wishlist and history
![ffwishlist](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/f08b1192-d026-4fdb-b406-697dc5e22803)
![ffhistory](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/a5ac1f91-ce24-41ec-986f-7ff7e35bc3a2)
![ffadd](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/1321dc6e-8307-4df7-a641-3b71e966e016)


### Secure user authentication
This app allows for user authentication with a local strategy as well as Google OAuth2.0
![fflogin](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/4114fe98-0720-4f83-a166-199b3af0250f)


### Manage account details and friends list
![ffprofile](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/9e2544b0-621a-47c4-93b5-26f0da85ea30)
![ffprofile](https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/1520aed6-90fe-4d15-8622-62269b208cdb)



## Dependencies
This project uses [Vite](https://vitejs.dev/guide/) for React and relies on the following libraries:
* [React Router](https://reactrouter.com/en/main/start/overview) (specifically, react-router-dom)
* [Axios](https://axios-http.com/docs/intro) (for connecting with foodieFriends-backend)
* [dotenv](https://www.npmjs.com/package/dotenv) (for loading environment variables)
* [Mapbox GL] (https://docs.mapbox.com/mapbox-gl-js/api/) (for rendering interactive maps)
* [React Map GL](https://visgl.github.io/react-map-gl/) (components wrappers for Mapbox GL)
### Design
* Fontsource
  * [@fontsource/aileron](https://socket.dev/npm/package/@fontsource/aileron)
  * [@fontsource/source-serif-pro](https://fontsource.org/fonts/source-serif-pro)
* Material UI 
  * Base UI: [Modal](https://mui.com/base-ui/react-modal/)
  * [System](https://mui.com/system/getting-started/)

## Installation
1. Git clone this repository
2. Install dependencies running `npm install`
3. Set up a .env file with the following:
  * VITE_MAPBOX_TOKEN (Your Mapbox public token)
  * VITE_SERVER_URL (Your backend URL)
4. Start the app by running `npm run dev`

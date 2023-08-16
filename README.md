# FoodieFriends - Frontend

FoodieFriends is a social media and lifestyle web application for tracking restaurants and connecting with friends over food.

A user can add and organize the restaurants they want to try out, mark a restaurant as visited with friends, and add rankings and comments to each wish or visit record. A friend who has the same restaurant on their wishlist will show up as a suggested FoodieFriend, so it's easy for users to find company for trying out new restaurants!

This app was created using a PERN (with Typescript) techstack.

## Demo
https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/0e20c340-a605-4244-b77b-6274eca9172b
This app allows for user authentication with a local strategy as well as Google OAuth2.0

https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/03bdfc2d-6345-4927-8f8a-cf3c9935714f
Users can organize, edit, and filter their wishlist and visited restaurants

https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/687b01a0-9060-4f27-9e5e-0f44adea0128
Currently, this app restricts users to restaurants located in the US.

https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/8485dcae-fff6-4400-85b1-c5540b2e7efe
Users can update their usernames and change their passwords

https://github.com/dorl9039/foodieFriends-frontend/assets/121260645/ab291b26-a1a9-471b-921e-6b2109ee67f2
Users can add new friends via username and remove them for whatever reason.


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

This repo is based on https://github.com/szwacz/electron-boilerplate. This repo has a lot of unnecessary things in it, but hopefully it is somewhat instructional.

In order to get around CORS issues, you will need to start using electron so that the requests can be made through node instead of the browser. I figured the best way for me to give some direction was to just create a demo. You can clone this and run `npm install` then `npm start` to see it in action. You'll need to have node installed. Hopefully it works for you on Windows.

I'm using React in this demo on the UI side, but you can use whatever you're comfortable with. You could even use jQuery or vanilla js.

## Components

#### Game Search

The first component is a game search that searches against the API you were using in rudder. The React component is located in [GameSearch.js](/src/GameSearch.js). The API call is using the axios library and the request is made in [fetchGamesByName.js](/src/api/fetchGamesByName.js)

#### Filesystem

The second component just grabs all of the files in the root of the project and displays them. The React component is located in [Filesystem.js](/src/Filesystem.js). This is using the fs-jetpack library which is just a wrapper around node's fs.

****

Hopefully this gives you an idea of how a project could be structured and how you can import/export functions between files. I'm sure you'll have a lot of questions so feel free to ask.

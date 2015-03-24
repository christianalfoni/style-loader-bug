# style-loader-bug
Small project to provoke style-loader bug

The setup uses node to launch a webpack-dev-server instance and proxying requests through `http-proxy`.


1. `npm install`
2. `node server`
3. Go to `localhost:3000`
4. The background color should be red
5. If it is white, do a file change in `app/main.js`, just a lineshift, save and refresh... it works
6. If it is red, please restart server until the problem occurs

When increasing number of chunks you will also start to get random errors in those chunks.

import getManifest from '../getManifest';

let files = false;
if (process.env.NODE_ENV !== 'development') files = getManifest();

const render = (html, preloadedState) => {
  return (`
  <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta author="Fernanda Rodriguez & Gabriel Pinto">
      <meta description="Sistema de ventas innovador y único">
      <title>FG Pos</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli&display=swap">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" crossorigin="anonymous">
      <link rel="stylesheet" href="${files ? files['main.css'] : 'assets/app.css'}" type="text/css"></link>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
      </script>
      <script src="${files ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
      <script src="${files ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;

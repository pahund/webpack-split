# webpack-split

Demo for code splitting with webpack, using the practices described in these tutorials:

* [Code Splitting](https://reactjs.org/docs/code-splitting.html) (React documentation)
* [Code Splitting](https://webpack.js.org/guides/code-splitting/) (webpack documentation)
* [Creating a React App… From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

The `src` directory contains two React components, each with their own stylesheet:

* [App.js](src/App.js)
* [Message.js](src/Message.js)

Using webpack, separate bundles were created for each of these components:

* `App`: [bundle.js](dist/bundle.js) / [main.css](dist/main.css)
* `Message`: [message.bundle.js](dist/message.bundle.js) / [message.css](dist/message.css)

The `App` component's JS bundle stylesheet are loaded when the page is loaded initially. It shows a simple
page with a button.

When the button is clicked, the `Message` component's JS bundle and stylesheet are loaded by the browser
and a message box is displayed on the page.

## Viewing the Demo

### Online

https://pahund.github.io/webpack-split/

### Localhost

Open the file `index.html` in IntelliJ IDEA and select `View` > `Open in browser`

**…or…**

Copy the file `index.html` and the `dist` directory to a web server into a subdirectory named `webpack-split`

## Installation

    npm install
    
## Building the webpack Bundles

    npm run build
    
## Dev Mode

For the sake of keeping the demo simple, there is no local development mode or hot module reloading. When
you make changes to the JavaScript or CSS source files, you have to run `npm run build` again to see the changes

## License

[MIT licensed](LICENSE)

Copyright © 2019 mobile.de GmbH


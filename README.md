This task shows my knowledge in React, React Query, zustand.
Of course there are bugs and place for improvements, but it is a test task,
and it should not take a lot of time and if some changes will be requested I could do them. I spend a day for this app.

# Bugs:
    - it is possible to open trade page without coins loaded. Just open home page and return to trade again, to fix a problem
    - When you type number with comma on Trade page seems like it stops calculating result

# Possible improvements:
    - Make more consistent design. App is workable but looks not good
    - Add sorting, at the momement only search implemented and it is local, API does not support search functionality
    - Add some loaders - when new data is loading
    - Implement useInfiniteQuery. I spent some time trying to implement it but it does not work with this API, but worked with others, magic, but potentially could be solved
    - Maybe persist for auth should be added. Because after reload you need to login again
    - Clean code to use one type of styling - module or classes

# PS: I am opened for questions and requests for any improvements


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

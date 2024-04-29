# System Logs and Metrics Viewer
Welcome to the System Logs and Metrics Viewer React application! This project provides a platform to fetch, view, and analyze system logs and metrics using dummy API data. It offers a user-friendly interface with features like real-time log updates, customizable time range selection, and dynamic chart rendering.

# Features
Terminal-like Log View: Renders previous logs and subscribes to live logs, updating continuously using React's useEffect hook.
Time Range Selection: Dropdown menu in the Navbar allows users to select quick time range options (e.g., Last 5 minutes, Last 1 hour), enabling live log updates accordingly.
Scroll to Bottom Button: Allows users to navigate directly to the latest logs, which keep populating at the bottom.
Live Log Count Display: Shows the count of live logs that have appeared below the fold, with an option to scroll to the latest logs.
Dynamic Charts: Renders four dynamic charts (CPU usage, Network usage, Memory usage, DISK IOPS) using Chart.js with React, providing real-time updates.
# Challenges Faced
The development process encountered challenges, particularly in synchronizing data between components and passing it effectively.

# To be Implemented in Future:
Although significant progress was made, a few features were not fully implemented:

URL State Reflection: All states of logs (filters) should reflect in the URL for easy sharing and bookmarking.
Chart Selection and Log Display: Ability to select and drag over any section within a chart (e.g., Peak/valley) to view corresponding logs for the selected time range.
# Usage
To run the application locally:

### Clone this repository to your local machine.
### Navigate to the project directory in your terminal.
### Install dependencies using npm install.
### Start the development server with npm start.
### Open your browser and visit http://localhost:3000 to view the application.
# Hosted Version
You can also access a hosted version of this application [here](https://frontend-assignment-5kb8-git-master-anuragpandey991s-projects.vercel.app/?_vercel_share=qqMRVpkvrUp49j7NLupeEyQH162nG8xN).



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

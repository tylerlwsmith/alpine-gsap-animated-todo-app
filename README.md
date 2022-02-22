# Alpine.js / GSAP animated todo app

This project is a first-pass proof-of-concept for using JavaScript-powered animations with Alpine.js when data is added or removed. The project animates the creation and removal of TODOs using GSAP. The current code is largely imperative and susceptible to race conditions, but it could likely be improved by moving towards a more state-chart oriented approach.

To view the project, go to https://codesandbox.io/s/alpine-gsap-animated-todo-app-ey4f7s. To run locally, clone the repository, run `npm install`, then run `parcel index.html --open`.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Pre-requisites

## Necessary Skills
  - Javascript (ES2016)
  - ReactJS
  - NodeJS
  - HTML, CSS

## Necessary Installations
  - NodeJS (Test command `node -v`)
  - NPM (Test command `npm -v`)
  - Google Chrome
  - Code Editor (Preferably ***VSCode***. Other options ***Atom***, ***Sublime Text***, etc.)

## Table of Contents

- [Project Overview](#project-overview)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm run server:start](#npm-run-serverstart)
- [Tasks Assigned](#tasks-assigned)
  - [Issue 1](#issue-1-table-sorting)
  - [Issue 2](#issue-2-pagination)
  - [Issue 3](#issue-3-user-details-component)

## Project Overview
  - The project is a single page web application to display details of employees of *Westeros*.
  - The goal is to be able to list basic details for all employees in a paginated view.
  - The table data should be sortable by all the fields
  - Clicking on name of employee should show all the details of the employee below the table
  - The application is build using `React.js` in front-end that loads data from the REST APIs from `server` built using `Node.js` & `express`
  - The DB is currently mocked in a file `db.js`. (*Do not modify this file*)


## Scripts Available

Below you will find some information on how to perform common tasks.<br>

### `npm install`
  - To install dependencies listed in `package.json`.

### `npm start`
  - To start client, run `npm start` on a terminal in the project folder.
  - Client will start on http://localhost:3000.
  - Normally, client will reload browser window automatically for any front end changes.

### `npm run server:start`

  - To start server, run `npm run server:start` on a new terminal in project folder
  - Server will start on http://localhost:4000.
  - Normally, server will auto restart for any server code changes

## Folder Structure

After creation, your project should look something like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      ...
    services/
      ...
    server/
      ...
      api-emp.js
      db-service.js
      db.js
      index.js
      router.js
    ...
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
## Tasks Assigned

## Issue #1 **Table Sorting**

### Expected behavior

  Clicking on headers of table should fetch data sorted by that column. Clicking the same column should toggle sorting order between `ASC` and `DESC`

### Current behaviour
  - Sorting for all columns doesn't work as expected
  - Clicking on sorted column doesnt toggle sorting order


## Issue #2 **Pagination**

### Expected behavior
  Clicking on `Next` button should fetch next page results. Clicking on `Previous` button should fetch previous page results.

### Current behaviour
  - Pagination doesn't work
  - Pagination button are not disabled appropriately


## Issue #3 **User Details Component**

### Expected behavior
  Clicking on `Name` of a particular user in the table should fetch the details of the selected user using an API service and display the fetched details below the table in a separate `React` component

### Current behaviour
  - Feature/Component is not implemented
  - Service is not implemented

# Happy Coding!

# Yoga Project Tracker

## Overview
Yoga Project Tracker is a simple single-page application (SPA) that helps you choose and record yoga practice. It's built using basic HTML, CSS and JavaScript, and uses `localStorage` for data saving.

### Version Control
This project uses git and github for tracking changes and managing development. Please see the github repository here: [URl to githubrepo]

## Features
- **Dynamic Recommendations** : Users can select their preferences from a drop-down and the system will dynamically generate yoga program recommendations based on the selected criteria.
- **Instant Feedback** : After selecting their preferences, users receive immediate feedback with detailed information about the recommended yoga classes.
- **Increment Count** : There is an "Add to List" button, and the history record will increase every time it is clicked.
- **Delete Data** : There is a "Delete" button next to each history record, and the corresponding record will be removed when it is clicked.
- **Data Persistence** : The application uses `localStorage` to remember all added records even if the page is refreshed or reopened.
- **Responsive Design** : The application is designed to be responsive, ensuring it can work across various devices, including desktops, tablets, and smartphones.

## Usage
There are two options:

1. View the website online at the following URL: [some link togithub pages]
2. 0pen the index.html`file in your web browser to start usingthe application.
   
Once the page is open, click the "Eat a Pie" button each time youeat a pie. If you want to reset the count(for example, at thestart of a new week), click the "Reset Count" button.

## Limitations
This application uses 'localstorage' for data persistence, which is limited to the specific browser and device. If you open theapplication in a different browser or on a different device, youwon't see the same pie count.

## Development Process

### Prototype Design Iterations

#### Initial Prototype
The initial prototype focused on recreating the wire frame. The main goal was to create a simple and intuitive interface that clearly communicates the functions of each accessory. For users to select their favorite yoga and receive recommendations.

![Home page initially](images/homePageInitial.png)
![Make list initially](images/makeListInitial.png)
![difficulty initially](images/Difficulty.png)

#### First Iteration
Based on feedback from students and tutors, the first iteration included a higher fidelity background image and the "Recommendation Page" was changed from a page to a pop-up window.

![Home page firstly](images/homePageFirst.png)
![Make list firstly](images/difficultyFirst.png)

#### Second Iteration
The second iteration completed the "Recommendation popup" and "My List" interface with better visual effects. In addition, responsive design principles were introduced to ensure that the application runs on different devices.

![Home page firstly](images/recomSecond.png)
![Make list firstly](images/myListFinal.png)

![Home page phone](images/homePagePhone.png) ![Make list phone](images/makeListPhone.png)
![Difficult phone](images/difficultPhone.png) ![My list phone](images/myListPhone.png)
#### - Logo Design

![Logo Design](images/logoImage.png)

![Logo](images/logo.png)

#### - Symbolic Icon
![Star Icon](images/delete.png)

![Star Icon](images/star.png)
![Star Icon](images/star.png)
![Star Icon](images/star.png)

![Star Icon](images/button-left.png)
![Star Icon](images/button-right.png)


### Initial Setup

#### Tools and Technologies
- **HTML5**: Markup language used for structuring the application.
- **CSS3**: Styling language used for designing the UI.
- **JavaScript**: Programming language used for application logic and interaction.
- **Node.js**: JavaScript runtime environment used for server-side development.
- **Express.js**: Web application framework for Node.js used to serve the application.

#### Project Structure
The project is structured as follows: 

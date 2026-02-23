// src/data/projects.js

const projects = [
  {
    id: 1,
    slug: "football-math-game",
    title: "Football Themed Math Game",
    description:
      "A simple app designed for children. The app has multiple football-themed windows that ask the player simple math questions. The user's score is totaled and displayed at the end.",
    image: "/images/mathGame.png",
    paragraph:
      "The Football Themed Math Game is a C# project of mine. The app displays a menu for the user to enter their name, age, and type of math (addition, subtraction, multiplication, division). The user is then taken to a new window where random math questions are generated. As the user enters their answer, a response is displayed whether they answered correctly or not. After 10 questions, they are taken to a final screen with their score displayed. They can then replay the game, return to the main menu, or exit. This is a fun game with themed backgrounds and music."
  },
  {
    id: 2,
    slug: "flight-reservation-system",
    title: "Flight Reservation System",
    description:
      "A C# program that allows a user to reserve a seat on multiple flight options using a graphical UI.",
    image: "/images/flightReservationSystem.png",
    paragraph:
      "The Flight Reservation System app is a C# project allowing the user to select a flight from a list, select a passenger from a list, and then choose the seat for that passenger. A GUI is displayed of the seat layout for the different flights. The seats are highlighted in certain colors depending on the availability of the seat. The user also can select a seat from a list not using the GUI."
  },
  {
    id: 3,
    slug: "simple-calculator",
    title: "Simple Calculator",
    description:
      "A calculator which can compute basic operations, such as addition, subtraction, multiplication, and division. The program is run using C++.",
    image: "/images/simpleCalculator.png",
    paragraph:
      "The Simple Calculator is a very basic console program. The user can enter two numbers and then choose the math they want to have done to the numbers, with their options being addition, subtraction, multiplication, and division. This is one of my very first programs I created. I like to see the progress made from this beginning program to now."
  },
  {
    id: 4,
    slug: "utah-ski-website",
    title: "Utah Ski Website",
    description:
      "A website designed to offer information about skiing in Utah and provide links to other sites to purchase equipment. The site displays various resorts and information about those resorts.",
    image: "/images/skiWebsite.png",
    paragraph:
      "The Utah Ski Website was designed by me to display all ski resorts in Utah. The website has multiple pages. The home page shows basic info about skiing in Utah, as well as a map with all resort locations. Another page displays each individual resort, where the user can click to display more information about each resort. Another page is dedicated to displaying ski and snowboarding gear, with links to other websites to purchase the gear. The last page is dedicated to the history of skiing and snowboarding in Utah. This website was a fun project for me to learn new HTML, CSS, and JavaScript skills."
  },
  {
    id: 5,
    slug: "angular-house-app",
    title: "Angular House App",
    description:
      "A web-app made to display multiple homes. The user can learn more about each home and even fill out personal information to apply to own the home.",
    image: "/images/houseApp.png",
    paragraph:
      "The House App was my first Angular project. I learned the basics of components within Angular to design a simple app displaying homes. The user can use a search bar to filter houses by location. The user can also click on a house to learn more, and even apply for the home. The user can enter their contact info, which is displayed before being prompted to go back to the home screen. This project helped me learn new concepts on my own without an instructor."
  },
  {
    id: 6,
    slug: "bank-application",
    title: "Bank Application",
    description: "A banking application made in React.",
    image: "/images/bankAppimage.png",
    paragraph:
      "This React application is a banking app to allow users to deposit, withdraw, and transfer money. Users can transfer to their own accounts or other users' accounts. The user can also see transaction history."
  },
  {
    id: 7,
    slug: "stock-market-game",
    title: "Stock Market Game",
    description:
      "A React app that lets users buy and sell stocks using actual stock market prices.",
    image: "/images/stockMarketImage.png",
    paragraph:
      "This React app uses an API service to get actual stock market prices from over 6 months ago, starting on a random day, and lets the user buy and sell stocks of their choice. The user can end the game to see how much money they won or lost after a certain amount of days."
  },
  {
    id: 8,
    slug: "classic-speed-game",
    title: "Classic Speed Game",
    description: "A two-player game of digital classic speed.",
    image: "/images/speedGameImage.png",
    paragraph:
      "This React app uses WebSockets to allow two users to play a game of classic speed together. Both users' screens are updated instantly as they play together."
  },
  {
    id: 9,
    slug: "two-player-hangman",
    title: "Two-Player Hangman Game",
    description: "A two-player game of hangman.",
    image: "/images/hangmanImage.png",
    paragraph:
      "This React app is a two-player game of hangman. One user can select the word while the other user has a limited number of guesses to win."
  }
];

export default projects;

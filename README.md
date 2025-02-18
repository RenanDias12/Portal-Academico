<p align="center"> 
  <img alt="Node.js CI" src="https://github.com/NathalyaStefhany/Portal-Academico/actions/workflows/node.js.yml/badge.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/NathalyaStefhany/Portal-Academico?color=%2304D361">
 
  <a href="https://github.comNathalyaStefhany/Portal-Academico/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/NathalyaStefhany/Portal-Academico">
  </a>   

</p>

# Portal Acadêmico
This project is a proposed interface for the Inatel academic portal.

<p align="center">
 <a href="#-project-description">Project Description</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-functionalities">Functionalities</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#-run-the-project">Run the Project</a> • 
 <a href="#-authors">Authors</a>
</p>

<p align="center">
  <img src="web-layout.png">
</p>

## 💻 Project Description
The project's objective is to develop a complete application (backend, web and mobile). In the mobile application we have the student's academic portal and on the web, in addition to having the student part, we also have the teacher and administrator part. Both applications use the same backend.

The project is being developed in:
- **Backend:** Node.js and MongoDB
- **Web:** React
- **Mobile:** Flutter

In addition, some software engineering techniques were applied:
- **Unit Tests:** created in backend using [Jest](https://jestjs.io/)
- **End-to-end Tests:** created in frontend using [Cypress](https://www.cypress.io/)
- **Continuous Integration (CI):** used in backend with [Github Actions](https://github.com/features/actions)

## 🎨 Layout
The application layout is available on Figma:

[![Generic badge](https://img.shields.io/badge/Mobile-Figma-blue.svg)](https://www.figma.com/file/FYdgvV8ZyrKSO97gk1YSsK/Portal-Acad%C3%AAmico-Mobile?node-id=0%3A1)
[![Generic badge](https://img.shields.io/badge/Web-Figma-blue.svg)](https://www.figma.com/file/Mq2Y7fAF6gTGm7shjpLZvT/Portal-Acad%C3%AAmico?node-id=166%3A335)

## 🎯 Functionalities

### Web

The application is divided into 3 parts:

- Student:
  - [x] Login
  - [x] Class Schedule
  - [x] Class Material
  - [x] Grades
  - [x] Frequency
  - [x] Academic Record
  - [x] Academic Coefficient
  - [x] Exam Dates
  - [x] Class Replacement
  - [x] Teacher's Office Hours
  - [x] Profile
  - [ ] Matriculation

- Teacher:
  - [x] Login
  - [x] Class and office hours schedules
  - [x] Publish Class Material
  - [x] Publish Grades
  - [x] Publish Frequency
  - [x] Profile

- Admin:
  - [x] Login
  - [x] Register Student
  - [x] Register Teacher
  - [x] Register Exam Date
  - [x] Register Class Reposition
  - [x] Profile

### Mobile
The application has the following features:
- [x] Login
- [x] Class Schedule
- [x] Class Material
- [x] Grades
- [x] Frequency
- [x] Academic Record
- [x] Academic Coefficient
- [x] Test Date
- [x] Class Replacement
- [x] Teacher's Office Hours

## 🛠 Technologies
The following tools were used in the construction of the project:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Flutter](https://flutter.dev/)
- [Dart](https://dart.dev/)

## 🚀 Run the Project
We can consider this project as being divided into three parts:
- Back-end
- Front-end
- Mobile

### 📝 Prerequisites
Before you begin, you'll need to have the following tools installed on your machine: [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/). In addition, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

### 🎲 Back-end
API in Node.js that provides communication with the MongoDB bank and is consumed by the web and mobile.

```sh
# Clone this repository
$ git clone https://github.com/NathalyaStefhany/Portal-Academico.git

# Access the project folder in your terminal/cmd
$ cd Portal-Academico

# Go to the back-end application folder
$ cd backend

# Install the dependencies
$ npm install

# At the first time, it's necessary to run this command
$ npm run typeorm migration:run

# Run the server in development mode
$ npm run dev

# The application will run on the port: 3333
```

### 🖥️ Front-end - Web
Developed with React.

```sh
# Clone this repository
$ git clone https://github.com/NathalyaStefhany/Portal-Academico.git

# Access the project folder in your terminal/cmd
$ cd Portal-Academico

# Go to the front-end application folder
$ cd frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run start

# The application will open on the port: 3000
# Go to http://localhost:3000
```

### 📱 Mobile
Developed with Flutter.

```sh
# Clone this repository
$ git clone https://github.com/NathalyaStefhany/Portal-Academico.git

# Access the project folder in your terminal/cmd
$ cd Portal-Academico

# Go to the mobile application folder
$ cd frontend

# Install the dependencies
$ flutter pub get

# Run the application in development mode
$ flutter run

# The application will open on the device you have chosen to run it on
```

## 👪 Authors
- **Web and Mobile:** Nathalya Stefhany ([Entre em contato!](https://www.linkedin.com/in/nathalya-stefhany-pereira/))
- **Backend and Mobile:** Renan Dias ([Entre em contato!](https://www.linkedin.com/in/renan-dias-faria-54a599190/))

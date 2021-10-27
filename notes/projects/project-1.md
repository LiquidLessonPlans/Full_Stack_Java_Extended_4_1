# Project 1

## Description

Your next project will build upon the concepts from project 0, adding the following topics:
 - HTML
 - CSS
 - JavaScript
 - Hibernate
 - DevOps

You will be building a client/server application with a frontend and backend. Your backend server will expose an API, and your front end client will connect to that API to send and receive JSON data. The backend will be written in Java, and the frontend will be written in HTML/CSS/JavaScript. 
  
You will be expected to complete the minimum viable product by the deadline and give a brief presentation demonstrating your project and answering questions from the QC team.

This project will be done in teams of 2-3 members that will be assigned when we begin.

### Minimum Requirements
1. Proper use of OOP principles
2. Output is presented to user on a web page, and input is accepted from a web form
4. CRUD operations are supported for one or more domain objects via the web application's API endpoints and invoked from the frontend
5. Communication is done with JSON in HTTP request and response bodies.
6. Abstract all JDBC away with Hibernate
7. Documentation (all classes and methods have adequate Javadoc comments)
8. All Exceptions are caught and logged to a file

### Bonus Features
1. Webapp(backend) and UI(frontend) are served from AWS and are publically available
1. DevOps CI/CD pipeline to build and deploy project
2. 80%+ Unit test line coverage for service-layer methods(Test as much as possible, ask trainer if unsure)
3. Advanced UI Framework (Angular or React)


## Airline Ticketing Kiosk App
These are user stories to describe the airline ticketing kiosk app. If you are not building this app for your project you will need to discuss with your trainer to establish proper user stories.

### Minimum Viable Product
* As a user, I can see all available flights from a city to a city.
* As a user, I can purchase one or more tickets on a flight.
* As a user, I can check in for my flight.
* As a user, I can cancel my ticket.
* As an administrator, I can schedule a new flight.
* As an administrator, I can cancel a flight.
* As an administrator, I can view a flight manifest (flight details + passenger list)

### Bonus Stories
* As an administrator, I can cancel a ticket on any flight.
* As an pilot, I can initiate takeoff of a flight. (No more new tickets or cancellations)

## Tech Stack
You should be employing the following technologies in your project.
 - Java 8
 - JavaScript
 - HTML & CSS
 - Apache Maven for dependencies and project management
 - Git & Github for version control
 - MariaDB deployed on AWS RDS for data persistence
 - Hibernate to abstract away JDBC code
 - AWS EC2, ElasticBeanstalk, S3, CodeBuild, CodePipeline

## Deadline & Presentation
 - Finalized version of your project must be pushed to your team's p1 repository within the training originzation by 9:00 AM Central time on the date of the presentation showcase. Commits after that time will not be considered. The most recent commit submitted before that time will be the version of the project that is graded.
   - Presentation Showcase (Due Date): Thursday, October 28th 2021, 9:00 AM CDT.
 - You will give a brief (10-15 minute) presentation of your project. Be prepared to answer questions about your work from the QC team.
 - Your work **MUST BELONG TO YOUR TEAM**. Collaboration is allowed and encouraged, but at the end of the project you must have an excellent understanding of every line of code in your project and be able to answer questions about any part of it.

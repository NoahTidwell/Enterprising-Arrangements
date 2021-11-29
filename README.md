# Enterprising Arrangements

## Demo Link:
[Enterprising Arrangements Link](https://enterprising-arrangements.herokuapp.com/)

## Licensing:
[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
GIVEN a CMS-style venue search application
<br /> WHEN I visit the site for the first time 
<br /> THEN I am presented with a homepage and an existing venue
<br /> WHEN I click on Home
<br /> THEN I am taken to the Homepage
<br /> WHEN I click Dahsboard
<br /> THEN I am taken to the Dashboard Page 
<br /> WHEN I click Sign Up 
<br /> THEN I am taken to the Sign Up Page and prompted with several required inputs <br /> WHEN I create an account 
<br /> THEN I can sign in and post, edit, or delete venues from the site
<br /> WHEN I click sign out 
<br /> THEN My session ends and I no longer have access to creating, editing, or deleting venues from the site.

## Installation:
This application uses node.js, express, mysql2,sequelize, and dotenv modules. To install necessary dependecies, run the following commands:
<br />
<br />
<br />
npm install mysql2
<br />
npm install dotenv
<br />
Create .env file with proper credentials
<br />
npm install bcrypt
<br />
npm install express-handlebars 
<br />
npm install connect-session-sequelize
<br />
Access mySQL Terminal and run <strong>source db/schema.sql</strong> to create the database. Exit mySQL terminal after successful creation.
<br />
Run <strong>node seeds/index.js</strong> to create the tables and seed with placeholder data.
<br />
Run <strong>node server.js</strong> to create the server and be able to access in local host port.

## Usage:
This project is used to search and post venues in your local area. Conglomerate all venue types from multiple venue owners on the site for viewers to have easy access to the information they need. Or Sign Up and Login to post, edit, or delete venues from the site.

## License:
MIT

## Contribution:
Github Pull Request, Issue, or Reach out to a current contributor.

## Testing:
This product can be tested through the demo link.

## Contact Info:
- Github: [Noah Tidwell](https://github.com/NoahTidwell), [Ivonne Fernandez](https://github.com/Ivonnor1975), [Jeff Lester](https://github.com/JeffGoji)
- Email: ntidwell34@yahoo.com, ivonne@jjf.com, jeff.lester01@outlook.com


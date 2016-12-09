# WDI Conf 2016

A totally legitimate conference run by the Web Development Immersive students at General Assembly, Melbourne.

Team - Queens of GA - Catherine, EJ, Kerrie, Melissa, Micah

## Technologies used
- Node.js
- Express.js
- PostgreSQL
- Heroku
- [Knex.js](http://knexjs.org/)
- [Pug](http://pugjs.org)
- [Materialize](http://materializecss.com/)

## Installation instructions
```
Fork repository
Clone your fork
$npm install
cp local_db.config.js.template local_db.config.js
Edit login credentials in local_db.config.js
Create PostgreSQL database wdiconf
./node_modules/.bin/knex migrate:latest
./node_modules/.bin/knex seed:run
Run either npm start or npm run dev
```

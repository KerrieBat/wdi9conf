// Update with your config settings.

var localConfig;
try {
  localConfig = require('./local_db.config');
}
catch (e) {
  console.error(e.message);
  console.warn('local_db.config not found. Falling back to process.env.DATABASE_URL');
  localConfig = {
    database: process.env.DATABASE_URL
  };
}

module.exports = {

  development: {
    client: 'postgresql',
    connection: localConfig,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

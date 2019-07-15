// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './environment/dev.js'
    }
  },
// dev.sqlite3
  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'mysql',
    connection: {
      host: '162.241.2.137',
      database: 'jovemt84_db_gifs',
      user:     'jovemt84_dba_pro',
      password: 'u*1cy]VPQk5i'
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

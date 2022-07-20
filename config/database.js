const parse = require('pg-connection-string').parse;
const config = require(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production'){
    return{
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
        },
        ssl:{
          rejectUnauthorized: false
        },
        debug: false,
      },
    }

  }
  return{
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'everfastfright'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '9529164989'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
      },
      debug: false,
    },
  }
  }

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'everfastfright'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', '9529164989'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//     },
//     debug: false,
//   },
// });

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

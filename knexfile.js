module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///dbWarmup"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};

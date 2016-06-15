module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/food_stuff'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}

module.exports = {
  HOST: 'sql9.freemysqlhosting.net',
  USER: 'sql9613965',
  PASSWORD: 'K3jwHp1VM8',
  DB: 'sql9613965',
  dialect: 'mysql',

  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
const cors = require('cors');

module.exports = (app) => {
  app.use(cors())
  app.use('/cep', require('./routes/cep'))
  app.use('/frete', require('./routes/frete'))
}

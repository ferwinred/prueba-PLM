const mongoose = require('mongoose')
const { dbURI } = require('./lib/config')

const connect = () => {

  mongoose.connect(dbURI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'prueba'
    })
    .then(() => {
      console.log('DB connected! :D');
    })
    .catch((err) => {
      console.error(err);
    });

};

module.exports = {
  connect
}
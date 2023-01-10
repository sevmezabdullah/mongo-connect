const mongoose = require('mongoose');

async function connect(address) {
  if (address) {
    mongoose.set('strictQuery', true);
    mongoose
      .connect(address)
      .then(() => {
        console.log('Database Connected');
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('adress bulunamadı');
    mongoose.set('strictQuery', true);
    mongoose
      .connect('mongodb://localhost:27017')
      .then(() => {
        console.log('Database Connected');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
async function disconnect() {
  mongoose
    .disconnect()
    .then(() => {
      console.log('Database Disconnected');
    })
    .catch((error) => {
      console.log('Error : ', error);
    });
}

module.exports = { connect, disconnect };

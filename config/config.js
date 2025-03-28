const monggose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

monggose.connect(process.env.MONGGO_URL, {
    
  
});

const db = monggose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});


// const Member = require('../model/member');

// const member1 = new Member({
//     name: 'John Doe',
//     email: 'oQe7o@example.com',
//     password: 'password123'
// });

// member1.save().then((result) => {
//   console.log(result);
//   monggose.connection.close();
// }).catch((error) => {
//   console.log(error);
//   monggose.connection.close();
// });
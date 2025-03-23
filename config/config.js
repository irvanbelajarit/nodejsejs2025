const monggose = require('mongoose');

// monggose.connect('mongodb://localhost:27017/db-untar-cafe2', {
    
  
// });
monggose.connect('mongodb+srv://irvanakia:irvan12345@cluster0.akduj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    
  
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
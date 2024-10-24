const mongoose = require('mongoose');

const URI = "mongodb+srv://napatel3083:nijesh001@cluster0.u6p1t.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI);
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true});
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error into coonect to the database'));

db.once('open',function()
{
    console.log("/////Database is connected sucessfully/////");
});





// const connectDB = async () => {
//     await mongoose.connect(URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });
//     console.log('db connected..!');
//   };
  
//   module.exports = connectDB;
  





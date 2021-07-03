const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://root:Backend080@cluster0.glisu.mongodb.net/myBackend?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then( () => {
        console.log('Connected to database')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

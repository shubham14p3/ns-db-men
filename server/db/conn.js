const mongoose = require('mongoose');
const DB="mongodb+srv://shubham14p3:nisecomport@nise-comport-user.nqqe0.mongodb.net/nisedb?retryWrites=true&w=majority"
// const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));
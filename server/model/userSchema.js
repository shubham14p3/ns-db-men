const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    name: {
        type: String
    },
    email: {
         type: String
    },
    phone: {
        type: String
    },
    work: {
         type: String
    },
    password: {
         type: String
    },
    cpassword: {
         type: String
    }
})

// Middelware 
// const middleware = (req,res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }


const User = mongooose.model('USER', userSchema);

module.exports = User;
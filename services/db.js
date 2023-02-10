const mongoose = require('mongoose');
const {mongoUri} = require("../constants");

if (process.env.NODE_ENV !== 'TEST') {

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Connected to mongo'))
        .catch((e) => console.log(e));
}

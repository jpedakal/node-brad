const express = require('express');
const app = express();
const webapi = require('./routes/api');

app.use('/api', webapi);

app.listen(3000, () => {
    console.log('Server running on port 3000')
});
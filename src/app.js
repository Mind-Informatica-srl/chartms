const express = require('express');
const bodyParser = require('body-parser');
const chartRoutes = require('./routes/chartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/charts', chartRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
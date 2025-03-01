const express = require('express');
const bodyParser = require('body-parser');
const setChartRoutes = require('./routes/chartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
setChartRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
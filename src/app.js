import express from 'express';
import bodyParser from 'body-parser';
import chartRoutes from './routes/chartRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
chartRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import ChartController from '../controllers/chartController.js';

const setChartRoutes = (app) => {
    const chartController = new ChartController();

    app.post('/api/chart', (req, res) => chartController.createChart(req, res));
};

export default setChartRoutes;
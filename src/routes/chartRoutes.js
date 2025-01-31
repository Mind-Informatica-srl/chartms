function setChartRoutes(app) {
    const ChartController = require('../controllers/chartController');
    const chartController = new ChartController();

    app.post('/api/chart', (req, res) => {
        chartController.createChart(req, res);
    });
}

module.exports = setChartRoutes;
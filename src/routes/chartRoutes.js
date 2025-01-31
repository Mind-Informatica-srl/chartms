function setChartRoutes(app) {
    const ChartController = require('../controllers/chartController');
    console.log(ChartController); // Aggiungi questo log per verificare l'importazione
    const chartController = new ChartController();

    app.post('/api/chart', (req, res) => {
        chartController.createChart(req, res);
    });
}

module.exports = setChartRoutes;
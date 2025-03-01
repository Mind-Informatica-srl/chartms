class ChartController {
    async createChart(req, res) {
        const chartData = req.body;

        // Validate incoming data
        if (!chartData || !chartData.labels || !chartData.sizes || !chartData.colors) {
            return res.status(400).send('Invalid data');
        }

        // Generate the chart using Chart.js
        const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
        const width = 800; // Set the width of the chart
        const height = 600; // Set the height of the chart
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

        const configuration = {
            type: 'pie',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'My Dataset',
                    data: chartData.sizes,
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                    },
                },
            },
        };

        try {
        const image = await chartJSNodeCanvas.renderToBuffer(configuration);
        res.set('Content-Type', 'image/png');
        res.send(image);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while generating the chart');
        }
    }
}

module.exports = ChartController;
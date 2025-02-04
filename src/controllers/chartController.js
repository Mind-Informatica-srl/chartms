import { Root } from '@amcharts/amcharts5/.internal/core/Root.js';
import { PieChart } from '@amcharts/amcharts5/.internal/charts/pie/PieChart.js';
import { PieSeries } from '@amcharts/amcharts5/.internal/charts/pie/PieSeries.js';
import * as am5 from '@amcharts/amcharts5/index.js';
import { Animation } from '@amcharts/amcharts5/.internal/core/util/Animation.js';

class ChartController {
    async createChart(req, res) {
        const chartData = req.body;

        // Validate incoming data
        if (!chartData || !chartData.labels || !chartData.sizes || !chartData.colors) {
            return res.status(400).send('Invalid data');
        }

        // Create chart instance
        let root = Root.new("chartdiv");
        let chart = root.container.children.push(
            PieChart.new(root, {})
        );

        // Add data
        chart.data = chartData;

        // Add and configure Series
        let pieSeries = chart.series.push(PieSeries.new(root, {
            name: "Series",
            dataFields: {
                value: "sizes",
                category: "labels",
            },
        }));
        pieSeries.slices.template.setAll({
            fill: am5.color(chartData.colors),
        });

        // return a byte array of the chart
        return res.send(chart.toBlob());
    }
}

export default ChartController;
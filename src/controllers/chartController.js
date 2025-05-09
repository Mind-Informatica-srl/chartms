import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class ChartController {
    async createChart(req, res) {
        const chartData = req.body;

        // Validate incoming data
        if (!chartData || !chartData.labels || !chartData.sizes || !chartData.colors) {
            return res.status(400).send('Invalid data');
        }

        // Create chart instance
        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in effect
        chart.legend = new am4charts.Legend();

        // Add data
        chart.data = chartData;
        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "sizes";
        series.dataFields.category = "labels";
        series.slices.template.propertyFields.fill = "colors"; // Set the color of each slice

        // return a byte array of the chart
        return res.send(chart.toBlob());
    }
}

export default ChartController;
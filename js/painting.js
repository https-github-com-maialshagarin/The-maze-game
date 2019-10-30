
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer");

    chart.options.axisY = { prefix: "$", suffix: "M", includeZero: false };
    chart.options.title = { text: " The price of each painting in our showroom is worldwide" };

    var series1 = { //dataSeries - first quarter
        type: "column",
        name: "First Quarter",
        showInLegend: true
    };

    var series2 = { //dataSeries - second quarter
        type: "column",
        name: "Second Quarter",
        showInLegend: true
    };

    chart.options.data = [];
    chart.options.data.push(series1);
    chart.options.data.push(series2);


    series1.dataPoints = [
            { label: "The Scream ", y: 150 },
            { label: "The Last Supper", y: 69 },
            { label: "The Girl With a Pearl Earring", y: 80 },
            { label: "Le Moulin de la Galette ", y: 74 },
            { label: "Star Night", y: 64 },
            { label: "Poppies in a Field", y: 63 }

    ];


    chart.render();
}

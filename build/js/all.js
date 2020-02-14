function renderName(el) {
    backDefault();
    let name = el.innerHTML;
    document.getElementById('student').innerHTML = name;
    el.style.background = 'white';
    el.style.color = 'black';
    el.style.textDecoration ='none';
}
function backDefault() {
    let list = document.getElementById('list');
    console.log('default');

    for (const element of list.children) {
        element.style.background ='none';
        element.style.color ='blue';
        element.style.textDecoration= 'underline';
    }
}


// // Load google charts
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
//
// // Draw the chart and set the chart values
// function drawChart() {
//     let data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work', 8],
//         ['Eat', 2],
//         ['TV', 4],
//         ['Gym', 2],
//         ['Sleep', 8]
//     ]);
//
//     // Optional; add a title and set the width and height of the chart
//     let options = {'title':'My Average Day', 'width':550, 'height':400};
//
//     // Display the chart inside the <div> element with id="piechart"
//     let chart = new google.visualization.PieChart(document.getElementById('piechart'));
//     chart.draw(data, options);
// }

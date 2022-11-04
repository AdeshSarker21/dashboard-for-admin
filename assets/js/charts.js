const plugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

// bar chart start
// setup block
const data = {
  labels: [
    "Jan 2018",
    "Feb 2018",
    "Mar 2019",
    "Apr 2019",
    "May 2019",
    "June 2019",
    "July 2019",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [250, 500, 750, 400, 600, 260, 400],
      backgroundColor: [
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
      ],
      borderColor: [
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
        "#49C0FF",
        "#D6D6D6",
      ],
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};

// // config block
const config = {
  type: "bar",
  data,
  plugins: [plugin],
  options: {
    // responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
};

// render block
const lasWeekChart = new Chart(document.getElementById("myChart"), config);
// bar chart end

// welcome dashboard file start

// // main line chart start
// var ctx = document.getElementById("lineChartMain").getContext("2d");
// var gradient = ctx.createLinearGradient(0, 0, 0, 300);
// gradient.addColorStop(0, "#147AD6");
// gradient.addColorStop(1, "#FFFFFF");
// const dataLineChart = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [20, 40, 91, 65, 68, 20, 30, 10],
//       backgroundColor: gradient,
//       pointRadius: 7,
//       borderColor: "#147AD6",
//       borderWidth: 2,
//       tension: 0.5,
//       fill: true,
//     },
//   ],
// };

// // config block
// let configLineChart = new Chart(ctx, {
//   type: "line",
//   data: dataLineChart,
//   plugins: [plugin],
//   options: {
//     // responsive: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           display: false,
//         },
//       },
//     },
//   },
// });

// Per day Sales by garage chart 1 start

var ctx = document.getElementById("lastWeekChart").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#147AD6");
gradient.addColorStop(1, "#FFFFFF");
const dataLastWeekChart = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "# of Votes",
      data: [300, 500, 240, 620, 255, 252, 5],
      backgroundColor: gradient,
      pointRadius: 7,
      borderColor: "#147AD6",
      borderWidth: 2,
      tension: 0.5,
      fill: false,
    },
  ],
};

// config block
let configLastWeekChart = new Chart(ctx, {
  type: "line",
  data: dataLastWeekChart,
  plugins: [plugin],
  options: {
    // responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
});
// Per day Sales by garage chart 1 end




// Per day Sales by garage chart 2 start
var ctxSecond = document
  .getElementById("lastWeekChartSecondChart")
  .getContext("2d");
var gradientSecond = ctxSecond.createLinearGradient(0, 0, 0, 300);
gradientSecond.addColorStop(0, "#147AD6");
gradientSecond.addColorStop(1, "#FFFFFF");
const dataLastWeekChartSecond = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      label: "# of Votes",
      data: [300, 500, 240, 620, 255, 252, 5],
      backgroundColor: gradientSecond,
      pointRadius: 7,
      borderColor: "#147AD6",
      borderWidth: 2,
      tension: 0.5,
      fill: false,
    },
  ],
};

// config block
let configLastWeekChartSecond = new Chart(ctxSecond, {
  type: "line",
  data: dataLastWeekChartSecond,
  plugins: [plugin],
  options: {
    // responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
});

// Per day Sales by garage chart 2 end

// main line chart end.

// // doughunut chart garages start
// const counter = {
//   id: "counter",
//   beforeDraw(Chart, args, options) {
//     const {
//       ctx,
//       chartArea: { top, right, bottom, left, width, height },
//     } = Chart;
//     ctx.save();
//     ctx.fillStyle = "#020344";
//     ctx.fillRect(width, top + height / 2, 0, 10);
//     ctx.font = "25px sans-serif";
//     ctx.textAlign = "center";
//     ctx.fillStyle = "#020344;";
//     ctx.textWeight = ctx.fillText(
//       dataDoughnut.datasets[0].data[0] + "%",
//       width + 34,
//       top + 10 + height / 2
//     );
//   },
// };
// const dataDoughnut = {
//   labels: ["Garage one", "Garage two", "Garage Three"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [54, 30, 26],
//       backgroundColor: ["#147AD6", "#79D2DE", "#EC6666"],
//       borderColor: ["#147AD6", "#79D2DE", "#EC6666"],
//       color: ["red", "blue", "#fff"],
//       cutout: "60%",
//       // datalabels : {
//       //   color : 'black',
//       //   backgroundColor : "white",
//       //   borderRadius :50,
//       //   padding : 10,
//       //   offset : 4,

//       // },
//     },
//   ],
// };

// // config
// const doughnutConfig = {
//   type: "doughnut",
//   data: dataDoughnut,
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//         align: "left",
//         fontSize: "16",
//         labels: {
//           pointStyle: "circle",
//           usePointStyle: true,
//           padding: 14,
//         },
//       },
//     },
//   },
//   // plugins : [ChartDataLabels]
// };

// // data redering
// const garagesDoughnut = new Chart(
//   document.getElementById("garagesDoughnutChart"),
//   doughnutConfig
// );

// // doughnut chart gareges end
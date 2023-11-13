//Bar chart showing average values
var average_data = [{
    x: ["Retail", "Grocery", "Parks","Transit", "Workplace", "Residential"],
    y: [25.927, 40.354, 74.408, 48.953 , 22.976, 13.686],
    type: 'bar'
}];

var average_layout = {
    title: "Average change in mobility for different classes across 2022"
}

Plotly.newPlot('average', average_data, average_layout);


//creating comparison charts

//retail
var retail1 = {
    x: ["min", "mean", "max"],
    y: [-45, 22, 108],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var retail2 = {
    x: ["min", "mean", "max"],
    y: [-12, 33, 108],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var retail_layout = {
    title:'Retail Mobility'
  };
  var retail_data = [retail1, retail2];
  
  Plotly.newPlot('retail', retail_data, retail_layout);

  //grocery
var grocery1 = {
    x: ["min", "mean", "max"],
    y: [-35, 38, 94],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var grocery2 = {
    x: ["min", "mean", "max"],
    y: [10, 45, 102],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var grocery_layout = {
    title:'Grocery Mobility'
  };
  var grocery_data = [grocery1, grocery2];
  
  Plotly.newPlot('grocery', grocery_data, grocery_layout);

//parks
var park1 = {
    x: ["min", "mean", "max"],
    y: [-44, 63, 244],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var park2 = {
    x: ["min", "mean", "max"],
    y: [-43, 95, 210],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var park_layout = {
    title:'Park Mobility'
  };
  var park_data = [park1, park2];
  
  Plotly.newPlot('park', park_data, park_layout);

  //Transit
var transit1 = {
    x: ["min", "mean", "max"],
    y: [-40, 42, 341],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var transit2 = {
    x: ["min", "mean", "max"],
    y: [-40, 63, 341],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var transit_layout = {
    title:'Transit Mobility'
  };
  var transit_data = [transit1, transit2];
  
  Plotly.newPlot('transit', transit_data, transit_layout);

  //workplace
var workplace1 = {
    x: ["min", "mean", "max"],
    y: [-74, 19, 96],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var workplace2 = {
    x: ["min", "mean", "max"],
    y: [-68, 30, 110],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var workplace_layout = {
    title:'Workplace Mobility'
  };
  var workplace_data = [workplace1, workplace2];
  
  Plotly.newPlot('workplace', workplace_data, workplace_layout);

  //Residential
var residential1 = {
    x: ["min", "mean", "max"],
    y: [2, 13, 35],
    type: 'scatter',
    name: 'First half of 2022'
  };
  
  var residential2 = {
    x: ["min", "mean", "max"],
    y: [4, 15, 34],
    type: 'scatter',
    name: 'Second half of 2022'
  };

  var residential_layout = {
    title:'Residential Mobility'
  };
  var residential_data = [residential1, residential2];
  
  Plotly.newPlot('residential', residential_data, residential_layout);

  
//Grouped Bar Chart

var first_mean = {
    x: ['Retail', 'Grocery', 'Parks', 'Transit' , 'Workplace' , 'Residential'],
    y: [22, 38, 63 , 42, 19, 13],
    name: 'First half of 2022',
    type: 'bar'
  };
  
  var second_mean = {
    x: ['Retail', 'Grocery', 'Parks', 'Transit' , 'Workplace' , 'Residential'],
    y: [33, 45, 95, 63, 30, 15],
    name: 'Second half of 2022',
    type: 'bar'
  };
  
  var mean_data = [first_mean, second_mean];
  
  var mean_layout = {
    barmode: 'group',
    title: "Difference in average mobility between the first half of 2022 <br> and the second half od 2022"
};
  
  Plotly.newPlot('group_ave', mean_data, mean_layout);
  
  
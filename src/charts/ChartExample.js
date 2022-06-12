// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations


// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const ChartExample=({data})=>{
    const chartConfigs = {
        type: "pie3d", // The chart type
        width: "60%", // Width of the chart
        height: "350", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Languages",
            //Set the chart subcaption
            subCaption: "most used languages",
            //Set the x-axis name
            xAxisName: "Country",
            //Set the y-axis name
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            //Set the theme for your chart
            theme: "fusion",
            decimals:'0'
          },
          // Chart Data
          data
        }
      };
    return <ReactFC {...chartConfigs}  />;
}
    
export default ChartExample;
// SVG attributes
var width = parseInt(d3.select('#scatter')
    .style("width"));

var height = width * 2/3;
var margin = 20;
var labelArea = 110;
var padding = 45;

// Creating SVG object 
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

// Labels for axes
svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");

// Transforming to xText
var bottomTextX =  (width - labelArea)/2 + labelArea;
var bottomTextY = height - margin - padding;
xText.attr("transform",`translate(
    ${bottomTextX}, 
    ${bottomTextY})`
    );

// Creating the x-axis (bottom) 
xText.append("text")
    .attr("y", -19)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class","aText active x")
    .text("In Poverty (%)");

xText.append("text")
    .attr("y", 0)
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class","aText inactive x")
    .text("Age (Median)");

xText.append("text")
    .attr("y", 19)
    .attr("data-name", "income")
    .attr("data-axis", "x")
    .attr("class","aText inactive x")
    .text("Household Income (Median)");

// Creating the y-axis (left)

svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");

// Transforming to yText
var leftTextX =  margin + padding;
var leftTextY = (height + labelArea) / 2 - labelArea;
yText.attr("transform",`translate(
    ${leftTextX}, 
     ${leftTextY}
    )rotate(-90)`
    );

// y-axis (left) 
// Build yText details (css class)
yText .append("text")
    .attr("y", -22)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Obese (%)");

yText .append("text")
    .attr("y", 0)
    .attr("data-name", "smokes")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Smokes (%)");

yText .append("text")
    .attr("y", 22)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Healthcare (%)");
    
// Visualize data  
// Define dynamic circle radius
var cRadius;
function adjustRadius() {
  if (width <= 530) {
    cRadius = 7;}
  else { 
    cRadius = 10;}
}
adjustRadius();

// Adding the data
d3.csv("assets/data/data.csv").then(function(data) {
    visualize(data);
});

function visualize (csvData) {
   var xMin;
   var xMax;
   var yMin;
   var yMax;

   // Using the current X & Y selections
   var currentX = "poverty";
   var currentY = "obesity";

   // Tool Tip info box 
   var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .offset([40, -60])
      .html(function(d) {
            //Building the text box
            var stateLine = `<div>${d.state}</div>`;
            var yLine = `<div>${currentY}: ${d[currentY]}%</div>`;
            if (currentX === "poverty") {
                xLine = `<div>${currentX}: ${d[currentX]}%</div>`}          
            else {
                xLine = `<div>${currentX}: ${parseFloat(d[currentX]).toLocaleString("en")}</div>`;}             
            return stateLine + xLine + yLine  
        });

    // Adding the toolTip to svg
    svg.call(toolTip);

    // Update upon axis option clicked
    function  labelUpdate(axis, clickText) {
        // Switching the active to inactive
        d3.selectAll(".aText")
            .filter("." + axis)
            .filter(".active")
            .classed("active", false)
            .classed("inactive", true);
    
        // switching to the text just clicked to active
        clickText.classed("inactive", false).classed("active", true);
        }

    // Finding the data max & min values for scaling
    function xMinMax() {
      xMin = d3.min(csvData, function(d) {
        return parseFloat(d[currentX]) * 0.85;
      });
      xMax = d3.max(csvData, function(d) {
        return parseFloat(d[currentX]) * 1.15;
      });     
    }

    function yMinMax() {
      yMin = d3.min(csvData, function(d) {
        return parseFloat(d[currentY]) * 0.85;
      });
      yMax = d3.max(csvData, function(d) {
        return parseFloat(d[currentY]) * 1.15;
      }); 
    }

    // Using the Scatter plot X & Y axis for computation
    xMinMax();
    yMinMax();

    var xScale = d3 
        .scaleLinear()
        .domain([xMin, xMax])
        .range([margin + labelArea, width - margin])

    var yScale = d3
        .scaleLinear()
        .domain([yMin, yMax])
        .range([height - margin - labelArea, margin])

    // Creating the scaled X and Y axis
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // Calculating the X and Y tick counts
    function tickCount() {
      if (width <= 500) {
         xAxis.ticks(5);
         yAxis.ticks(5);
      }
      else {
          xAxis.ticks(10);
          yAxis.ticks(10);
      }        
    }
    tickCount();

    // Appending the axis to the svg as group elements
    svg.append("g")
        .call(xAxis)
        .attr("class", "xAxis")
        .attr("transform", `translate(
            0, 
            ${height - margin - labelArea})`
        );

    svg.append("g")
        .call(yAxis)
        .attr("class", "xAxis")
        .attr("transform", `translate(
            ${margin + labelArea}, 
            0 )`
        );

    // Appending the circles for data for each row
    var allCircles = svg.selectAll("g allCircles").data(csvData).enter();

    allCircles.append("circle")
        .attr("cx", function(d) {
            // xScale 
            return xScale(d[currentX]);
        })
        .attr("cy", function(d) {
            return yScale(d[currentY]);
        })
        .attr("r", cRadius)
        .attr("class", function(d) {
            return "stateCircle " + d.abbr;
        })
        .on("mouseover", function(d) {
            // Showing the tooltip when the mouse is hoovering over circle
            toolTip.show(d, this);
            // Highlight circle border
            d3.select(this).style("stroke", "#323232");
        })
        .on("mouseout", function (d) {
            // Remove the tooltip
            toolTip.hide(d);
            // Remove the highlight
            d3.select(this).style("stroke", "#e3e3e3")
        });

        // Apply state text on circles 
        allCircles
            .append("text")
            .attr("font-size", cRadius)
            .attr("class", "stateText")

            .attr("dx", function(d) {
               return xScale(d[currentX]);
            })
            .attr("dy", function(d) {
              // Pushing the text to center 
              return yScale(d[currentY]) + cRadius /3;
            })
            .text(function(d) {
                return d.abbr;
              })

            .on("mouseover", function(d) {
                toolTip.show(d);
                d3.select("." + d.abbr).style("stroke", "#323232");
            })

            .on("mouseout", function(d) {
                toolTip.hide(d);
                d3.select("." + d.abbr).style("stroke", "#e3e3e3");
            });

          // Dynamic graph
          d3.selectAll(".aText").on("click", function() {
              var self = d3.select(this)

              // Selecting the inactive
              if (self.classed("inactive")) {
                // Labels that are saved on the axis and namel
                var axis = self.attr("data-axis")
                var name = self.attr("data-name")

                if (axis === "x") {
                  currentX = name;

                  // Updating min and max of domain (x)
                  xMinMax();
                  xScale.domain([xMin, xMax]);

                  svg.select(".xAxis")
                        .transition().duration(800)
                        .call(xAxis);
                  
                  // Updating the location of the circles
                  d3.selectAll("circle").each(function() {
                    d3.select(this)
                        .transition().duration(800)
                        .attr("cx", function(d) {
                            return xScale(d[currentX])                
                        });
                  });   

                  d3.selectAll(".stateText").each(function() {
                    d3.select(this)
                        .transition().duration(800)
                        .attr("dx", function(d) {
                            return xScale(d[currentX])                          
                        });
                  });          
                  // Update the labels 
                  labelUpdate(axis, self);
                }

                 // Updating Y axis 
                else {
                  currentY = name;

                  // Updating the min and max of thr range (y)
                  yMinMax();
                  yScale.domain([yMin, yMax]);

                  svg.select(".yAxis")
                        .transition().duration(800)
                        .call(yAxis);

                  // Updating the location of the circles
                  d3.selectAll("circle").each(function() {
                    d3.select(this)
                        .transition().duration(800)
                        .attr("cy", function(d) {
                            return yScale(d[currentY])                
                        });                       
                  });   

                  d3.selectAll(".stateText").each(function() {
                      d3.select(this)
                        .transition().duration(800)
                        .attr("dy", function(d) {
                           // Centering the text
                            return yScale(d[currentY]) + cRadius/3;                          
                        });
                  });

                  // Changes to the active class and by using thr clicked label
                  labelUpdate(axis, self);
                }
              }
          });
}
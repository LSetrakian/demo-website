var margin = {top: 10, right: 10, bottom: 100, left: 60};

var width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0,width],1);

var x2 = d3.scale.ordinal()
    .rangeRoundBands([0,width],0);

var y = d3.scale.linear() 
    .range([height,0]); 

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var color = d3.scale.category10();

var tooltip = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);
  

d3.csv("unemployment.csv", ready);

function ready(error, data) {
    if (error) throw error;

    data.forEach(function(d) {
        d.unemp = +d.unemployed;
    });

    console.log("data", data);
      
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map(function(d) { return d.ID; }));
    y.domain([0, d3.max(data, function(d) { return d.unemp; })]);
    x2.domain(data.map(function(d) { return d.ID; }));

    svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        // .call(xAxis)
        // .selectAll("text")
        // .attr("y", 0)
        // .attr("x", 9)
        // .attr("dy", "-0.2em")
        // .attr("transform", "rotate(90)")
        // .style("text-anchor", "start");

    svg.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)
        .append("text")
        //.attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0em")
        .attr("text-anchor", "end")
        .text("Unemployment (%)");

    bars = svg.append("g").attr("class", "bars");

    bars.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.ID); })
        .attr("y", function(d) { return y(d.unemp); })
        .attr("width", 10)
        .attr("height", function(d) { return height - y(d.unemp); })
        .style("fill", "#CCC")
        .on("mouseover", function(d) {
            d3.select(this).style("fill", function(d) { return color(d.ID); })
            tooltip.text(d.Town + ": " + d.unemp)
            .style("opacity", 0.8)
                    .style("left", (d3.event.pageX)+0 + "px") 
                    .style("top", (d3.event.pageY)-0 + "px");

        })


        .on("mouseout", function(d) {
            tooltip.style("opacity", 0);
            d3.select(this).style("fill", "#CCC");

        });

    // don't need this because I'm inserting MA's average
    //var sum = d3.sum(data, function(d) { return d.unemp; }); 
    var average = 6.8;

    var line = d3.svg.line()
        .x(function(d, i) { return x2(d.ID) + i; })
        .y(function(d, i) { return y(average); }); 

    svg.append("path")
        .datum(data)
        .attr("class", "mean")
        .attr("d", line);

    svg.append("text")
        .attr("transform", "translate(" + (width+3) + "," + y(average) + ")")
        .attr("dy", "1em")
        .attr("text-anchor", "end")
        .style("fill", "blue")
        .html("MA average " + average + "%");


    }

// this could be adapted to have info show up below once you click on a datapoint, 
// if we use it, make sure to put semicolon after the click function, put it before mouseout
        // .on("click", function(d){
        //     alert(d.Town);
        // })

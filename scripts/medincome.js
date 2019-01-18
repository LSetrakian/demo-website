(function() {
// medincome D3 visualization code!!!
    // Updated margins below
    var margin = {top: 10, right: 10, bottom: 20, left: 60};

    var width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0,width],1);

    var x2 = d3.scale.ordinal()
        .rangeRoundBands([0,width],0);

    var y = d3.scale.linear() 
        .range([height,0]); 

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var color = d3.scale.category10();

    //swap out 'body' for medincome ID
    var tooltip = d3.select("#medincome").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);
      

    //input medincome.csv
    d3.csv("./data/medincome/medincome.csv", ready);

    //modify function to read in medincome data column
    function ready(error, data) {
        if (error) throw error;

        data.forEach(function(d) {
            d.medinc = +d.medincome;
        });

        console.log("data", data);
        
        //swap out 'body' for medincome ID     
        var svg = d3.select("#medincome").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
           
        //modify code to pull our data
        x.domain(data.map(function(d) { return d.id; }));
        y.domain([0, d3.max(data, function(d) { return d.medinc; })]);
        x2.domain(data.map(function(d) { return d.id; }));

        //removed x-axis element
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")");
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
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("dy", "0em")
            .attr("text-anchor", "end")
            .text("Median Income ($)");

        bars = svg.append("g").attr("class", "bars");

        //modify code to pull our data, update tooltip display
        bars.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.id); })
            .attr("y", function(d) { return y(d.medinc); })
            .attr("width", 5)
            .attr("height", function(d) { return height - y(d.medinc); })
            .style("fill", "#CCC")
            .on("mouseover", function(d) {
                d3.select(this).style("fill", function(d) { return color(d.id); })
                tooltip.text(d.city + ": $" + d.medinc)
                .style("opacity", 0.8)
                        .style("left", (d3.event.pageX)+0 + "px") 
                        .style("top", (d3.event.pageY)-0 + "px");

            })


            .on("mouseout", function(d) {
                tooltip.style("opacity", 0);
                d3.select(this).style("fill", "#CCC");

            });

        //edit code to assign "average" to our key datapoint
        var average = 59039;

        //edit code to pull our data
        var line = d3.svg.line()
            .x(function(d, i) { return x2(d.id) + i; })
            .y(function(d, i) { return y(average); }); 

        svg.append("path")
            .datum(data)
            .attr("class", "mean")
            .attr("d", line);

        //changed display name for average line
        svg.append("text")
            .attr("transform", "translate(" + (width+3) + "," + y(average) + ")")
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .style("fill", "blue")
            .html("US median income average: $" + average);


    }
})();

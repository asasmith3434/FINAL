
var screen = {width: 800, height: 500};
var margins = {top: 50, right: 100, bottom: 50, left: 50};




var penpromise= d3.csv("DATA3.csv")




penpromise.then(function(data)
                {
    console.log(data)
   // console.log(WSH(data))
   //console.log(data.map(WSH))
    setup(data)
    
}),
function(err)
{
  console.log("negative Ghost Rider", err)  
}

/*var WSH= function(row)
{
    var obj= {}
    obj.Games= (row.Games)
    return obj
}*/


var setup= function(data)
{
    
    d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height)
    .append("g")
    .attr("id", "graph")
.attr("transform", "translate(" + margins.left + "," + margins.top + ")")    
     var width= screen.width - margins.left - margins.right;
    var height= screen.height - margins.top - margins.bottom;
    
    
    var xScale = d3.scaleLinear()
                    .domain(["2006", "2018"])
                    .range([0, width]);
    
    var yScale = d3.scaleLinear()
                .domain([-1, 1])
                .range([height, 0])
    
   
    
var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
var xAxis = d3.axisBottom(xScale)
var yAxis = d3.axisLeft(yScale)

d3.select("svg")
    .append("g")
    .attr("class", "axis")

    d3.select(".axis")
    .append("g")
    .attr("id", "xAxis")
    .attr("transform","translate(" + margins.left + " ," + (margins.top + height) + ")")
    .call(xAxis)
    
 d3.select(".axis")
        .append("g")
        .attr("id", "yAxis")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
        .call(yAxis)
 
   var types= ["Games Played", "Goals", "Power Play Goals"] 
    
 d3.select("#Button")
    .selectAll("options")
    .data(types)
    .enter()
    .append('option')
    .text(function(d) { return d})
    .attr("value", function (d) { return d})
    
var mycolor= d3.scaleOrdinal()
.domain(types)
.range(d3.schemeSet2)
    
drawLegend(data, cScale)
drawArray(data, xScale, yScale, cScale)
}

var drawLegend= function(data, cScale)
{
d3.select("svg")
     .append("g").attr("id", "legend")
    .attr("transform", "translate(" + (screen.width - margins.right) + "," + (margins.top) + ")"
)
    
    var gs = d3.select("#legend")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("fill", function(arr)
         {
        return cScale(arr.name)
    })
    .attr("transform", function (Goals, i)
         { return "translate(0, " + (i) + ")"; })
    
          
gs.append("rect").attr("width", 10).attr("height", 10);
    gs.append("text")
    .text(" Ovechkin")
    .attr("x", 15)
    .attr("y", 10)
    .attr("fill", "black")
}

var drawArray= function(data, xScale, yScale, cScale, index)
{
   
    var lineGenerator= d3.line()
        .x(function(num, ind) { return yScale(num);})
        .y(function(num) { return yScale(num);})
        .curve(d3.curveMonotoneX)
    d3.select("#graph")
    .select("path")
    .datum(data[index].map(function(d) { return d.Goals}))
    .transition(1000)
    .attr("d", lineGenerator)
    
    /*var arrays= d3.select("#graph")
    .selectAll("g")

    .append("g")
    .attr("fill", "none")
    .attr("stroke", function(data)
    {
          return cScale(data)
          })
    .attr("stroke-width", 3)
    var lineGenerator= d3.line()
    .x(function(num, index) {return xScale(index)})
    .y(function(num){return yScale(num)})
    .curve(d3.curveNatural)
    
    arrays.datum( mapping)
    .append("path")
    .attr("d", lineGenerator)
    
    var WSH= function(row)
{
   return  row.Games
    
}
    var mapping = data.map(WSH)
}*/
}

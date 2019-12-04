
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
                    .domain([2005, 2019])
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
 
    d3.select("svg")   
.append("text")
    .attr("transform", "translate("+ (width/2) + "," + (height+margins.top+30)+")")
    .style("text-anchor", "middle")
    .text("Seasons Played on NHL")
   
    
 d3.select(".axis")
        .append("g")
        .attr("id", "yAxis")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
        .call(yAxis)

    d3.select("svg")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", (margins.left-55))
    .attr("x", 0-(height/2))
   .attr("dy", "lem")
    .style("text-anchor", "middle")
    .text("Percentage Difference") 
 


  var l1=false; 

   d3.select("#Button")
    .text("Games Played Per Season")
  
    .on("click", function(d) { 
       
       l1= !l1; if(l1)
       {
          drawArray(data, xScale, yScale, cScale, "Games")
       
       }
      else { d3.select("#Games")
          .remove() 
           
           }
       
       console.log("work")
                             })
    
     var l2=false; 

   d3.select("#Button2")
    .text("Goals Per Season")
    
    .on("click", function(d) { 
       
       l2= !l2; if(l2)
       {
          drawArray(data, xScale, yScale, cScale, "Goals")
       
       }
      else { d3.select("#Goals")
          .remove() 
           
           }
       
       console.log("work")
                             })
    
    var l3=false; 

   d3.select("#Button3")
    .text("Penalties Per Season")
    
    .on("click", function(d) { 
       
       l3= !l3; if(l3)
       {
          drawArray(data, xScale, yScale, cScale, "Penalty")
       
       }
      else { d3.select("#Penalty")
          .remove() 
           
           }
       
       console.log("work")
                             })

    
    var l4=false; 

   d3.select("#Button4")
    .text("PowerPlays Per Season")
    
    .on("click", function(d) { 
       
       l4= !l4; if(l4)
       {
          drawArray(data, xScale, yScale, cScale, "PowerPlays")
       
       }
      else { d3.select("#PowerPlays")
          .remove() 
           
           }
       
       console.log("work")
                             })
    
    
    
    
    var l5=false; 

   d3.select("#Button5")
    .text("Shots Per Season")
    
    .on("click", function(d) { 
       
       l5= !l5; if(l5)
       {
          drawArray(data, xScale, yScale, cScale, "Shots")
       
       }
      else { d3.select("#Shots")
          .remove() 
           
           }
       
       console.log("work")
                             })
    
    
    
    var l6=false; 

   d3.select("#Button6")
    .text("Clear All")
    
    .on("click", function(d) { 
       
       l6= !l6; if(l6)
       {
//drawArray(data, xScale, yScale, cScale, "Games")
    //drawArray(data, xScale, yScale, cScale, "Goals")
   //drawArray(data, xScale, yScale, cScale, "Shots")
   // drawArray(data, xScale, yScale, cScale, "PowerPlays")
  // drawArray(data, xScale, yScale, cScale, "Penalty") 
           d3.select("#Games")
          .remove() 
           d3.select("#Goals")
            .remove()
            d3.select("#Shots")
            .remove()
            d3.select("#PowerPlays")
            .remove()
           d3.select("#Penalty")
           .remove()
       }
      else { 
           }
       
       console.log("work")
                             }) 
    
  
    
    
    

   
   //drawArray(data, xScale, yScale, cScale, "Games")
    //drawArray(data, xScale, yScale, cScale, "Goals")
   //drawArray(data, xScale, yScale, cScale, "Shots")
   // drawArray(data, xScale, yScale, cScale, "PowerPlays")
   // drawArray(data, xScale, yScale, cScale, "Penalty")
    // drawArray1(data, xScale, yScale, cScale)
    drawLegend(array, cScale)
    drawArray(data, xScale, yScale, cScale, "Crosby")
}
var array= ["Games", "Goals", "Penalty", "PowerPlays", "Shots", "Crosby"]
var drawLegend= function(array, cScale)
{
    var width= 200;
    var height= 200;
  
    
    
    d3.select("svg")
    .append("g").attr("id", "legend")
   //.attr("transform", "translate(" + (screen.width - margins.right) + "," + (margins.top) + ")")
    .attr("width", width)
    .attr("height", height)
    
    
    var gs = d3.select("#legend")
    .selectAll("g")
    .data(array)
    .enter()
    .append("g")
    
    .attr("transform", function (array, i)
         { return "translate(700, " + (i*14) + ")"; })
   
    
          
gs.append("rect").attr("width", 10).attr("height", 10)
 .attr("fill", function(array) { return cScale(array)})  

gs.append("text")
    .text(function(d){ return d})
  
    .attr("x", 15)
    .attr("y", 10)
   
} 


var drawArray= function(data, xScale, yScale, cScale, dimension)
{
   var arrays= d3.select("#graph")
    
   .append("g")
 
   .attr("id", dimension)
   .attr("fill", "none")
   .attr("stroke",  cScale(dimension))
   .attr("stroke-width", 4)

   
    var lineGenerator= d3.line()
        .x(function(num) { return xScale(num.Season);})
        .y(function(num) { return yScale(num[dimension]);})
       // .curve(d3.curveMonotoneX)
   
    arrays.append("path") //or transition
    .datum(data)//(function(d) { return d.Goals}))
   .transition(1000)
    .attr("d", lineGenerator)

}














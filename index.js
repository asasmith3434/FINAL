
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
    .attr("y", (margins.left-50))
    .attr("x", 0- (height/2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percent Difference")
 


   
       /*  d3.select("#graph")
        .selectAll("circle")
        .data(data)
       .enter()
        .append("circle")     
    .on("mouseover", function(d)
        {
            var label = "(" + d.Season + "," + d.Goals + ")";
            d3.select("#tooltip")
            .text(label)  
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 30) + "px")
                .classed("hidden", false);
        })
        .on("mouseout", function()
        {
            d3.select("#tooltip")
                .classed("hidden", true);
        })  
    */

    
  var mine= function(data, xScale, yScale, dimension){ return drawArray(data, xScale, yScale, cScale, "Games")
         drawplots(data, xScale, yScale, cScale, "Games")
       tooltip(data, xScale, yScale, "Games") }
            

    
    

  var l1=false; 

   d3.select("#Button")
    .text("Games Played Per Season")
  
    .on("click", function(d) { 
       
       l1= !l1; if(l1)
       {
         
         drawArray(data, xScale, yScale, cScale, "Games")
         drawplots(data, xScale, yScale, cScale, "Games")
       tooltip(data, xScale, yScale, "Games")
      
       }
      else { d3.selectAll("#Games")
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
           drawplots(data, xScale, yScale, cScale, "Goals")
            tooltip(data, xScale, yScale, "Goals") 
       }
      else { d3.selectAll("#Goals")
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
           drawplots(data, xScale, yScale, cScale, "Penalty")
           tooltip(data, xScale, yScale, "Penalty")
             
       }
      else { d3.selectAll("#Penalty")
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
           drawplots(data, xScale, yScale, cScale, "PowerPlays")
            tooltip(data, xScale, yScale, "PowerPlays")            

       
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
           drawplots(data, xScale, yScale, cScale, "Shots")
           tooltip(data, xScale, yScale, "Shots")              

       
       }
      else { d3.selectAll("#Shots")
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
 
           d3.selectAll("#Games")
          .remove() 
           d3.selectAll("#Goals")
            .remove()
            d3.selectAll("#Shots")
            .remove()
            d3.selectAll("#PowerPlays")
            .remove()
           d3.selectAll("#Penalty")
           .remove()
       }
      else { 
           }
       
       console.log("work")
                             }) 
    
    
 

    

    
    
  
    
   
     
    
    
    
    
    
    
    
    
    
    

   
   
    drawLegend(array, cScale)
  
   // drawplots(data, xScale, yScale, cScale, "Games")
      // drawplots(data, xScale, yScale, cScale, "Goals")
    drawArray(data, xScale, yScale, cScale, "Crosby")
   
}
var array= ["Games", "Goals", "Penalty", "PowerPlays", "Shots", "Crosby"]
var drawLegend= function(array, cScale)
{
    var width= 200;
    var height= 200;
  
    
    
    d3.select("svg")
    .append("g").attr("id", "legend")
   
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

var drawplots= function(data, xScale, yScale, cScale, dimension)
{
    d3.select("#graph")
   
    .selectAll("circle")
   .data(data)
   .transition()
    .duration(1000)
     .attr("id", dimension)
   .attr("fill", function(trash) 
        {
        return cScale(dimension)
    })
   .attr("cx", function(num)
        {
       return xScale(num.Season)
   })
   .attr("cy", function(num)
        {
       return yScale(num[dimension])
   })
   .attr("r", 6);
    

  

}



    var tooltip=  function(data, xScale, yScale, dimension)
  { d3.select("#graph")
        .selectAll("circle")
        .data(data)
       .enter()
        .append("circle") 
    .on("mouseover", function(d)
        {
            var label = "(" + d.Season + "," + d[dimension] + ")";
            d3.select("#tooltip")
            .text(label)  
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 30) + "px")
                .classed("hidden", false)
                        

      ;
        })
        .on("mouseout", function()
        {
            d3.select("#tooltip")
                .classed("hidden", true);
        }) 
    
  }


 /*var tooltip2=  function(data, xScale, yScale, dimension)
  { d3.select("#graph")
        .selectAll("circle")
        .data(data)
       .enter()
        .append("circle")     
    .on("mouseover", function(d)
        {
            var label = "(" + d.Season + "," + d[dimension] + ")";
            d3.select("#tooltip2")
            .text(label)  
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 30) + "px")
                .classed("hidden", false);
   
        })
        .on("mouseout", function()
        {
            d3.select("#tooltip2")
                .classed("hidden", true);
        }) 
    
  } */




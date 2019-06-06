//parameters
let w = innerWidth;
let h = innerHeight;
let color = d3.scale.ordinal().range(["rgb(243, 10, 10)", "rgb(80, 10, 243)"]);

//creation of pie with quotient value
let pie = d3.layout.pie()
  .value(function (d) { return d.quotient; })

//creation of arc by inner and outer radius
let arc = d3.svg.arc()
  .innerRadius(30 / 1.125)
  .outerRadius(30);

let L_arc = d3.svg.arc()
  .innerRadius(30 / 1.5).outerRadius(30);

// data in the form of csv with 3 variables(word(string), context(string), qotuient(float))
d3.csv("words.csv", function (corpus) {
  let col = "word,context,quotient\n" + corpus;
  let data = d3.csv.parse(col);
  data.forEach(function (d) {
    d.quotient = +d.quotient;
  });

  // creattion of W for entering the words in the pie
  let W = d3.nest()
    .key(function (d) { return d.word; })
    .entries(corpus);

  // creation of svg
  let svg = d3.select("body")
    .data(W)
    .enter()
    .append("div")
    .attr("width", w)
    .attr("height", h)
    .style("display", "inline-block")
    .append("svg")
    .attr("width", 60)
    .attr("height", 60)
    .append("g")
    .attr("transform", "translate(" + 30 + "," + 30 + ")");

  // adding words according to th W which definded before
  svg.append("text")
    .style("fill", "rgb(12, 8, 87)")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function (d) { return d.key; });

  // creation of g
  let g = svg.selectAll("g")
    .data(function (d) { return pie(d.values); })
    .enter().append("g");

  // Add color based on context, tooltip and hover effect to the arcs
  g.append("path")
    .attr("d", arc)
    .style("fill", function (d) { return color(d.data.context); })

    .on('mouseover', function (d) {
      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.65')
        .attr('d', L_arc)
    })
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '1')
        .attr('d', arc);
    })

    .append("title")
    .text(function (d) { return d.data.context + ": " + d.data.quotient; });

});

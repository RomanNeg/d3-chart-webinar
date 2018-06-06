// Margin conversation https://bl.ocks.org/mbostock/3019563
const margin = { 
  top: 50, 
  right: 50, 
  bottom: 50, 
  left: 50
};

const width = 900 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;

const svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);


const data = [
  { id: 1, title: 'hello', value: 22 },
  { id: 2, title: 'hello1', value: 2 },
  { id: 3, title: 'hello2', value: 122 },
  { id: 4, title: 'hello3', value: 322 },
];

data.map((item, n) => {
  // https://github.com/d3/d3-selection
  svg.append('rect')
    .attr('class', 'bar')
    .attr('height', 100);
});

function draw() {
  // https://github.com/d3/d3-selection#joining-data
  d3.selectAll('.bar')
    .data(data)
      .attr('width', d => d.value)
      .attr('y', (d, n) => n * 100);
}


draw();
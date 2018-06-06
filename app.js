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
class D3Directive {
  constructor($window, $interval) {
    this.template = `<svg width='0' height='0'></svg>`;
    this.restrict = 'EA';
    this.$window = $window;
    this.$interval = $interval;
  }
  link($scope, elem){
    const {$window, $interval} = this;
    const {d3} = $window;
    const svg = d3.select('svg');

    function drawShapes(data) {
      svg.selectAll('*').remove()
      var [svgWidth, svgHeight] = [$window.innerWidth * .985, $window.innerHeight * .88]
      svg.attr('width', svgWidth)
        .attr('height',svgHeight)
      $scope.shapeList = data;
      var [xcount, ycount ] = [0, 10];
      var maxSize = 0;
      data.forEach(({constructor: {name}, size}) =>{
        xcount+= 5
        if(name === 'Circle') {
          svg.append('circle')
            .attr('cx', xcount + size )
            .attr('cy', ycount + size)
            .attr('r', size)
            .style('fill', 'blue')
          .call(d3.drag().on("drag", function(){
            d3.select(this)
              .attr('cx', d3.event.x)
              .attr('cy', d3.event.y)
            })
          )
          xcount += size * 2;
        } else if (name === 'Square') {
          svg.append('rect')
            .attr('x', xcount)
            .attr('y', ycount)
            .attr('height', size)
            .attr('width', size)
            .style('fill', 'red')
          .call(d3.drag().on("drag", function(){
            d3.select(this)
              .attr('x', d3.event.x)
              .attr('y', d3.event.y)
            })
          )
          xcount+= size;
        }           
        if(xcount + size * 2 > $window.innerWidth) {
          xcount = 0
          ycount += size + 30 
        }
        maxSize = Math.max(maxSize, size);
      })
      if(svgHeight < ycount + maxSize ) {
        svgHeight = ycount + maxSize + 20; 
        svg.attr('height', svgHeight)          
      }
    }
    drawShapes(ShapeGenerator());

    $interval(() => drawShapes(ShapeGenerator()), 2000)
    var rotation = 0
    $interval(() =>{
      rotation <= 360 ? rotation += 10 : rotation = 0
      svg.selectAll('rect')
        .each(function () {
          let {x,y, width, height} = this
          d3.select(this)
            .attr('transform', `rotate(${rotation}, ${
              x.baseVal.value + (width.baseVal.value /2 )}, ${
              y.baseVal.value + (height.baseVal.value / 2)})`)
        })
    },500)
  }
}
angular.module('ShapeRenderer', ['myApp'])
.directive('d3Shapes', D3Directive);

classDecorator Shape {
  getArea() {
    return Math.trunc(this.area)
  }
}

@Shape
class Circle {
  constructor(radius) {
    super()
    this.size = radius
    this.area = Math.PI * (radius * radius)
  }
  toString() {
    return `Circle: Radius = ${this.size}, Area = ${this.getArea()}`
  }
}
@Shape
class Square{
  constructor(x) {
    super()
    this.size = x
    this.area = x * x
  }
  toString(){
    return ` Square: Size = ${this.size}, Area = ${this.getArea()}`
  }
}

const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function ShapeGenerator () {
  let circles = []
  let squares = []
  let i = 50
  while(--i) {
    circles.push(new Circle(Math.floor(randRange(1,100) / 2)))
    squares.push(new Square(randRange(1,100)))
  }
  return [...circles, ...squares].sort((a, b) => a.area - b.area)
}


angular.module('Shapes',[])
.factory('Circle', Circle) 
.factory('Square', Square)
.factory('ShapeGenerator', ShapeGenerator)


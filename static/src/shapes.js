class Shape {
  getArea(){
    return Math.trunc(this.area)
  }
}
class Circle extends Shape{
  constructor(radius) {
    super()
    this.size = radius
    this.area = Math.PI * (radius * radius)
  }
  toString(){
    return `Circle: Radius = ${this.size}, Area = ${this.getArea()}`
  }
}
class Square extends Shape{
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

function ShapeGenerator (maxSize=100) {
  let circles = []
  let squares = []
  let i = 50
  while(i--) {
    circles.push(new Circle(Math.floor(randRange(1,maxSize) / 2)))
    squares.push(new Square(randRange(1,maxSize)))
  }
  return [...circles, ...squares].sort((a, b) => a.area - b.area)
}


angular.module('Shapes',[])
.service('Circle', Circle) 
.service('Square', Square)
.service('ShapeGenerator', ShapeGenerator)


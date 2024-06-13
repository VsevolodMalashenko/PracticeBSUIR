class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  calcPerimeter() {
    const perimeter = this.width * 2 + this.height * 2
    return perimeter
  }
  calcArea() {
    const area = this.width * this.height
    return area
  }
}

const firstRectangle = new Rectangle(5, 10)
console.log(firstRectangle.calcArea()) // 50
console.log(firstRectangle.calcPerimeter()) // 30

const secondRectangle = new Rectangle(1, 50)
console.log(secondRectangle.calcArea()) // 50
console.log(secondRectangle.calcPerimeter()) // 102

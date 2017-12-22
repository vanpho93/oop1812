/*
    class Line
    2 thuoc pointA, pointB
    getLength -> return do dai doan thang
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
// class Triangle pointA, pointB, pointC -> getPerimeter
class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    get length() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    get perimeter() {
        const lAB = new Line(this.pointA, this.pointB);
        const lAC = new Line(this.pointA, this.pointC);
        const lBC = new Line(this.pointB, this.pointC);
        return lAB.length + lAC.length + lBC.length;
    }
}
const pA = new Point(0, 0);
const pB = new Point(1, 0);
const pC = new Point(0, 1);
const tABC = new Triangle(pA, pB, pC);
console.log(tABC.perimeter);


// const pA = new Point(0, 2);
// const pB = new Point(0, 1);
// const lAB = new Line(pA, pB);
// console.log(lAB.length);
// console.log(pointA.getDistance());
// console.log(pointA.distance);

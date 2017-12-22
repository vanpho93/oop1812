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

const pointA = new Point(1, 1);
console.log(pointA.getDistance());
console.log(pointA.distance);

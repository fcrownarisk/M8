enum Dot {
    Dot = 0
}
enum Line {
    Line = 0
}
class Shapes {
    Dot: number;
    Line: number;
    constructor() {
        this.Dot = Dot.Dot;
        this.Line = Line.Line;
    }
}
const shapes = new Shapes();
const x = shapes.Dot;
const y = shapes.Dot;
const z = shapes.Dot;
let a= shapes.Line;
let b= shapes.Line;
let c = shapes.Line;
console.log(x, y, z, a, b, c);
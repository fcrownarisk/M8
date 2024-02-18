class Prism {
    length: number;
    width: number;
    height: number;
    faces: number;
    constructor(length: number, width: number, height: number, faces: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.faces = faces;
    }
}
let ThePrism = new Prism(5, 3, 10, 5);
console.log(ThePrism.length)
console.log(ThePrism.width)
console.log(ThePrism.height)
console.log(ThePrism.faces)
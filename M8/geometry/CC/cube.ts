    class Cube {
        private sideLength: number;
        private static readonly faces = 6;
        constructor(sideLength: number) {
            this.sideLength = sideLength;
        }
        getVolume(): number {
            return Math.pow(this.sideLength, 3);
        }
        getSurfaceArea(): number {
            return Cube.faces * Math.pow(this.sideLength, 2);
        }
    }
let cube = new Cube(5);
console.log(`The volume of the cube is ${cube.getVolume()} cubic units.`);
console.log(`The surface area of the cube is ${cube.getSurfaceArea()}`);

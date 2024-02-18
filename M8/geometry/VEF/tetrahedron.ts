

class Tetrahedron {
    constructor(sideLength: number) {
        this.sideLength = sideLength
    }
    sideLength = NaN
    public getVolume(): number {
        return Math.sqrt(3) * (this.sideLength^2)
    }
    public getSurfaceArea(): number {
        return Math.sqrt(3) * this.sideLength
    }
}
let tetrahedron = new Tetrahedron(0)
console.log(tetrahedron.getVolume())
console.log(tetrahedron.getSurfaceArea())
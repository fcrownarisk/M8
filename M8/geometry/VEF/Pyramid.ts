import '../Vector3D'
class Pyramid {
    baseWidth: number;
    baseLength: number;
    positionX: number;
    positionZ: number;
    height: number;
    constructor(baseWidth: number, baseLength: number, positionX: number, positionZ: number, height: number) {
        this.baseWidth = baseWidth;
        this.baseLength = baseLength;
        this.positionX = positionX;
        this.positionZ = positionZ;
        this.height = height;
    }
    calculateVolume(): number {
        return (1 / 3) * this.baseWidth * this.baseLength * this.height;
    }
    calculateSurfaceArea(): number {
        // Assuming the pyramid is a regular pyramid with slant heights equal to the height
        const slantHeight = Math.sqrt((2 * this.baseWidth) ** 2 + this.height ** 2);
        return (1 / 2) * this.baseWidth * this.baseLength + this.baseWidth * slantHeight;
    }
    describe(): string {
        return `This pyramid has a base width of ${this.baseWidth} units, a base height of${this.baseLength} units,` +
            `and stands at a height of ${this.height} units from the X-Z platform.` +
            `Its position on the X-axis is ${this.positionX} and on the Z-axis is${this.positionZ}.`;
    }
}
const pyramid = new Pyramid(1, 1, 0, 0, 1);
console.log(pyramid.describe());
console.log(`Volume of the pyramid: ${pyramid.calculateVolume()} cubic units`);
console.log(`Surface area of the pyramid: ${pyramid.calculateSurfaceArea()} square units`);
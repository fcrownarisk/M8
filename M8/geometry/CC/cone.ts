class Cone {
    radius: number;
    height: number;
constructor(radius: number, height: number) {
        this.radius = radius;
        this.height = height;
    }
getVolume(): number {
        return (1/3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }
getSurfaceArea(): number {
        return Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height;
    }
}
let myCone = new Cone(1, 1)
console.log(myCone.getVolume())// 输出圆锥体的体积
console.log(myCone.getSurfaceArea()) // 输出圆锥体的表面积
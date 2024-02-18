import '../Vector3D'
class Sphere {
    private center: Vector3D;
    private radius: number;
    constructor(center: Vector3D, radius: number) {
        this.center = center;
        this.radius = radius;
    }
    getSurfaceArea(): number {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
    getVolume(): number {
        return 4.0 / 3.0 * Math.PI * Math.pow(this.radius, 3);
    }
}
let sphere = new Sphere(Vector3D,1);
console.log(`The surface area of the sphere is ${sphere.getSurfaceArea()} square units.`);
console.log(`The volume of the sphere is ${sphere.getVolume()} cubic units.`);
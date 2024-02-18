import '../particle'
import '../geometry/vector3D'
import '../equation/momentum'
import '../geometry/CC/cone'
class ParticleInLightCone {
    mass: number;
    constructor(mass: number) {
        this.mass = mass;
    }
    calculateMomentumFromEnergy(energy: number): Vector3D {
    const momentum = new Vector3D();
    momentum.setMag(energy);
    return momentum;
}
    calculateEnergyFromMomentum(momentum: Vector3D): number {
        return Math.abs(momentum.length());
    }
}
// Helper class to represent a 3D vector
class Vector3D {
    x: number;
    y: number;
    z: number;

    constructor(x?: number, y?: number, z?: number) {
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
        this.z = z !== undefined ? z : 0;
    }

    setMag(mag: number) {
        this.normalize();
        this.scale(mag);
    }

    normalize(): this {
        const len = this.length();
        if (len === 0 || len === 1) return this;
        const inv_len = 1 / len;
        this.x *= inv_len;
        this.y *= inv_len;
        this.z *= inv_len;
        return this;
    }
    scale(scalar: number): this {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}
const particle = new ParticleInLightCone(0.5);
const energy = 10;
const momentum = particle.calculateMomentumFromEnergy(energy);
console.log(`Momentum: ${momentum}`);
const momentumVector = new Vector3D(3, 4, 5);
const energyFromMomentum = particle.calculateEnergyFromMomentum(momentumVector);
console.log(`Energy: ${energyFromMomentum}`);

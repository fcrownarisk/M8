class Physics{
    static calculateMomentum(mass: number, velocity: number): number {
        return mass * velocity;
    }
}
console.log(Physics.calculateMomentum(5, 10));
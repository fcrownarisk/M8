import '../dotline'
import '../equation/maxwell_equation'
function calculateMagneticForce(charge: number, velocity: number, magneticField: number): number {
    return charge * velocity * magneticField;
}
function calculateElectricForce(charge1: number, charge2: number, distance: number): number {
    return charge1 * charge2 / (distance * distance);
}
const charge: number = 1.602e-19; // Charge of an electron (Coulombs)
const velocity: number = 5e6; // Velocity of an electron (m/s)
const magneticField: number = 1.2; // Magnetic field (Tesla)
const distance: number = 0.5; // Distance between two charges (m)
console.log(calculateElectricForce)
console.log(calculateMagneticForce)
console.log(charge)
console.log(velocity)
console.log(magneticField)
console.log(distance)

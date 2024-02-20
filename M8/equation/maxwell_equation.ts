type ElectricField = {
    x: number
    y: number
    z: number
}
type MagneticField = {
    x: number
    y: number
    z: number
}
type ChargeDensity = {
    x: number
    y: number
    z: number
}
type CurrentDensity = {
    x: number
    y: number
    z: number
}
interface MaxwellEquation {
    (electricField: ElectricField, magneticField: MagneticField, chargeDensity: ChargeDensity, currentDensity: CurrentDensity): void;
}
const maxwellEquation: MaxwellEquation = (electricField, magneticField, chargeDensity, currentDensity) => {
    // ∇ · E = ρ
    // This equation states that the divergence of the electric field is equal to the charge density
    const divE = calculateDivergence(electricField);
    if (divE !== chargeDensity.x + chargeDensity.y + chargeDensity.z) {
        console.error('Maxwell\'s equation not satisfied: ∇ · E = ρ');
    }

    // ∇ × B = μ₀J
    // This equation states that the curl of the magnetic field is equal to the current density times the vacuum permeability
    const curlB = calculateCurl(magneticField);
    const mu0 = 4 * Math.PI * 10**-7; //真空 permeability (SI units)
    if (curlB.x !== currentDensity.x * mu0 || curlB.y !== currentDensity.y * mu0 || curlB.z !== currentDensity.z * mu0) {
        console.error('Maxwell\'s equation not satisfied: ∇ × B = μ₀J');
    }

    // The other two equations (∇ · B = 0 and ∇ × E = -∂B/∂t) are not checked here
};
function calculateDivergence(field: ElectricField | MagneticField): number {
    return field.x + field.y + field.z;
}
function calculateCurl(field: ElectricField | MagneticField): MagneticField {
    return {
        x: field.y * field.z - field.z * field.y,
        y: field.z * field.x - field.x * field.z,
        z: field.x * field.y - field.y * field.x,
    }
}
const chargeDensity: ChargeDensity = {
    x: 1,
    y: 2,
    z: 3,
}
const currentDensity: CurrentDensity = {
    x: 4,
    y: 5,
    z: 6,
}
const electricField: ElectricField = {
    x: 7,
    y: 8,
    z: 9,
}
const magneticField: MagneticField = {
    x: 10,
    y: 11,
    z: 12,
}
maxwellEquation(electricField, magneticField, chargeDensity, currentDensity);

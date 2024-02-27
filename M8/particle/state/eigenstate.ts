interface Quantity {
    value: number; 
    unit: string;  
}
class QuantumState {
    label: string;
    physicalQuantity: Quantity;
    constructor(label: string, Quantity: Quantity) {
        this.label = label;
        this.Quantity = Quantity;
    }
    measure(): Quantity {
        return this.Quantity;
    }
}

class Eigenstate extends QuantumState {

    eigenvalue: number;
    constructor(label: string, Quantity: Quantity, eigenvalue: number) {
        super(label, Quantity);
        this.eigenvalue = eigenvalue;
    }
    measure(): Quantity {
        return {
            value: this.eigenvalue,
            unit: this.Quantity.unit
        };
    }
}
const energyEigenstate = new Eigenstate('Energy Eigenstate', { value: 0, unit: 'J' }, 1); // 假设本征值为1.23焦耳
const measurement = energyEigenstate.measure();
console.log(`Measured value: ${measurement.value}${measurement.unit}`);

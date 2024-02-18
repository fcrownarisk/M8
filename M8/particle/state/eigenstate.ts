interface PhysicalQuantity {
    value: number; // 物理量的值
    unit: string;   // 物理量的单位
}
class QuantumState {
    label: string;
    physicalQuantity: PhysicalQuantity;
    constructor(label: string, physicalQuantity: PhysicalQuantity) {
        this.label = label;
        this.physicalQuantity = physicalQuantity;
    }
    measure(): PhysicalQuantity {
        return this.physicalQuantity;
    }
}

class Eigenstate extends QuantumState {

    eigenvalue: number;
    constructor(label: string, physicalQuantity: PhysicalQuantity, eigenvalue: number) {
        super(label, physicalQuantity);
        this.eigenvalue = eigenvalue;
    }
    measure(): PhysicalQuantity {
        return {
            value: this.eigenvalue,
            unit: this.physicalQuantity.unit
        };
    }
}
const energyEigenstate = new Eigenstate('Energy Eigenstate', { value: 0, unit: 'J' }, 1); // 假设本征值为1.23焦耳
const measurement = energyEigenstate.measure();
console.log(`Measured value: ${measurement.value}${measurement.unit}`);
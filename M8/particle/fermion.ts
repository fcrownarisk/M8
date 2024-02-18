
class Particle2 {
    name: string
    quantumNumber: number
    constructor(name: string, quantumNumber: number) {
        this.name = name
        this.quantumNumber = quantumNumber
    }
    transitionState(newState: number): void {
        console.log(`${this.name} transitioned to state${newState}`)
        this.quantumNumber = newState
    }
}
class Fermion extends Particle2 {
constructor(name: string, quantumNumber: number) {
        super(name, quantumNumber)
    }
    checkState(quantumNumber: number): boolean {

        return Fermion.constructor(quantumNumber)
    }
    occupyState(quantumNumber: number): boolean {
        if (this.checkState(quantumNumber)) {
            console.log('State is already occupied by another Fermion.')
            return false
        } else {
            this.quantumNumber = quantumNumber;
            console.log(`${this.name} occupies state ${quantumNumber}`)
            return true
        }
    }
}
const electron1 = new Fermion('Electron 1', 1)
const electron2 = new Fermion('Electron 2', 2)
electron1.transitionState(2)
electron2.occupyState(electron1.quantumNumber)
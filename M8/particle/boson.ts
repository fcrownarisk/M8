class Particle1 {
    name: string
    quantumNumber: number
    constructor(name: string, quantumNumber: number) {
        this.name = name
        this.quantumNumber = quantumNumber
    }
    sameStateParticles: Particle1[]
    transitionState(newState: number): void {
        console.log(`${this.name} transitioned to state${newState}`);
        this.quantumNumber = newState
    }
}
class Boson extends Particle1 {
    sameStateParticles: Particle1[] = []
constructor(name: string, quantumNumber: number) {
        super(name, quantumNumber)
    }
    occupySameState(anotherBoson: Boson): void {
        this.transitionState(anotherBoson.quantumNumber); // Use the method
        this.sameStateParticles.push(anotherBoson);
        console.log(`${this.name} and ${anotherBoson.name} are now in the same state.`);
    }
}
const photon1 = new Boson('Photon 1', 1)
const photon2 = new Boson('Photon 2', 1)
photon1.occupySameState(photon2);

export class Boson {
    spin: number;
    constructor(spin: number) {
        this.spin = spin;
    }
    getSpin(): number {
        return this.spin;
    }
    setSpin(newSpin: number): void {
        if (newSpin % 1 === 0) {
            this.spin = newSpin;
        } else {
            throw new Error(`self spin must be integer`);
        }
    }
}
const photon = new Boson(1);

console.log(photon.getSpin());

try {
    photon.setSpin(0);
} catch (e) {
    console.error(e.message);
}
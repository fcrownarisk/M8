
interface EnergyState {
    energy: number;
    stability: boolean;
}
class eigenState implements EnergyState {
    energy: number;
    stability: boolean;
constructor(energy: number) {
        this.energy = energy;
        this.stability = true;
    }
}
class ActivatedState implements EnergyState {
    energy: number;
    stability: boolean;
    lifetime: number;
constructor(energy: number, lifetime: number) {
        this.energy = energy;
        this.stability = false;
        this.lifetime = lifetime;
    }
relaxtoeigenState(): eigenState {
        console.log(`The activated state with energy ${this.energy} relaxes to the eigen state.`);
        return new eigenState(0);
    }
}
export const EigenState = new eigenState(0);
console.log(EigenState)
export var activatedState = new ActivatedState(1.5, 10);
console.log(activatedState)
 const relaxedState = activatedState.relaxtoeigenState();
console.log(relaxedState)
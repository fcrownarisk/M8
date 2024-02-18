import '../momentum'
import '../fenymann diagram/fenymann diagram'
// Define an interface for an inertial frame of reference
interface InertialFrameOfReference {
    name: string;
    transformLaws(laws: string[]): void;
}
// Implement the interface for an inertial frame of reference
class ReferenceFrame implements InertialFrameOfReference {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    transformLaws(laws: string[]) {
        console.log(`Applying transform laws in ${this.name}:${laws.join(', ')}`);
    }
}
// Define a class for the speed of light in a vacuum
class SpeedOfLight {
    constantValue: number;
    constructor() {
        this.constantValue = 299792458; // meters per second
    }
    isConstant(forObserver: boolean): boolean {
        return forObserver;
    }
}
const frame1 = new ReferenceFrame('Frame 1');
const frame2 = new ReferenceFrame('Frame 2');
const speedOfLight = new SpeedOfLight();
// Apply transform laws in both frames
frame1.transformLaws(['p1', 'p2']);
frame2.transformLaws(['p3', 'p4']);
// Show that the speed of light is constant for both observers
console.log(`The speed of light in Frame 1 is ${speedOfLight.constantValue} m/s.`);
console.log(`The speed of light in Frame 2 is ${speedOfLight.isConstant(true)} m/s.`);

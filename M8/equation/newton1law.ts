// Define the interface for an external force
interface ExternalForce {
    type: 'applied' | 'gravity';
    magnitude: number;
    unit: string;
}

// Define a type alias for an initializer that can be used to create an ExternalForce
type Initializer = {
    unit: string;
    magnitude: number;
    type: 'none'; // This is the initial type when no force is applied
};
// Function to create an ExternalForce from an Initializer
function createExternalForce(initializer: Initializer): ExternalForce {
    return {
        type: initializer.type === 'none' ? 'applied' : initializer.type,
        magnitude: initializer.magnitude,
        unit: initializer.unit,
    };
}
// Example usage:
const noForce: Initializer = {
    unit: 'N',
    magnitude: 0,
    type: 'none',
};
const force = createExternalForce(noForce);
console.log(force); // { type: 'applied', magnitude: 0, unit: 'N' }

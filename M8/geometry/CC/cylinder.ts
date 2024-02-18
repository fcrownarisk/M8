function calculateCylinder(radius: number, height: number): { volume: number, surfaceArea: number } {

    const volume = Math.PI * (radius * radius) * height;
    const surfaceArea = 2 * Math.PI * radius * height + 2 * Math.PI * (radius * radius);

    return { volume, surfaceArea };
}

const radius = 1;
const height = 1;
const result = calculateCylinder(radius, height);
console.log(`Volume: ${result.volume.toFixed(2)} cubic units`);
console.log(`Surface Area: ${result.surfaceArea.toFixed(2)} square units`);

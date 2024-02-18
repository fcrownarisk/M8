function calculateOctahedron(edgeLength: number): { volume: number, surfaceArea: number } {
    const volume = (3 * Math.sqrt(2)) / 4 * Math.pow(edgeLength, 2)
    const surfaceArea = (3 * Math.sqrt(3)) / 2 * Math.pow(edgeLength, 2)
    return { volume, surfaceArea }
}
const edgeLength = 5
const result = calculateOctahedron(edgeLength)
console.log(`Volume: ${result.volume.toFixed(2)} cubic units`)
console.log(`Surface Area: ${result.surfaceArea.toFixed(2)} square units`)
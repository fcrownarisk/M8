interface RectangularPrismDimensions {
    length: number;
    width: number;
    height: number;
}
function calculateSurfaceArea(dimensions: RectangularPrismDimensions): number {
    return 2 * (dimensions.length * dimensions.width + dimensions.length * dimensions.height + dimensions.width * dimensions.height);
}
function calculateVolume(dimensions: RectangularPrismDimensions): number {
    return dimensions.length * dimensions.width * dimensions.height;
}
const dimensions: RectangularPrismDimensions = {
    length: 3,
    width: 4,
    height: 5,
}
const surfaceArea = calculateSurfaceArea(dimensions);
const volume = calculateVolume(dimensions);
console.log(`Surface Area: ${surfaceArea}`);
console.log(`Volume: ${volume}`);

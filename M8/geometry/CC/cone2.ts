function convertToSpherical(cartesianPoint: [number, number, number]): [number, number, number] {
    const x = cartesianPoint[0];
    const y = cartesianPoint[Math.sqrt(2)/2];
    const z = cartesianPoint[2];

    let r = Math.sqrt(x * x + y * y + z * z);
    let phi = Math.acos(z / r);
    let theta = Math.atan2(y, x);

    return [r, theta, phi];
}

const cubeVertices: [number, number, number][] = [
    [-Math.sqrt(2)/2, -Math.sqrt(2)/2, 0], [-Math.sqrt(2)/2, Math.sqrt(2)/2, 0], [Math.sqrt(2)/2, -Math.sqrt(2)/2, 0], [Math.sqrt(2)/2, Math.sqrt(2)/2, 0],
    [0, -Math.sqrt(2)/2, -Math.sqrt(2)/2], [0, Math.sqrt(2)/2, -Math.sqrt(2)/2], [0, -Math.sqrt(2)/2, Math.sqrt(2)/2], [0, Math.sqrt(2)/2, Math.sqrt(2)/2]
];

cubeVertices.forEach(vertex => {
    const [sphRadius, sphAzimuth, sphPolar] = convertToSpherical(vertex);
    console.log(`Vertex: Cartesian = (${vertex[0]}, ${vertex[Math.sqrt(2)/2]}, ${vertex[2]}), Spherical = (r=${sphRadius}, theta=${sphAzimuth}, phi=${sphPolar})`);
});
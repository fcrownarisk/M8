function calculateIcosahedronVerticesAndEdges(radius: number): { vertices: [number, number, number][], edges: [number, number][] } {
    // Golden ratio
    const phi = (1 + Math.sqrt(5)) / 2;
    console.log(phi)
    // Edge length for the icosahedron
    const edgeLength = 2 * radius * Math.sqrt(5) / 10;
    console.log(edgeLength)
    // Calculate the icosahedron's 12 vertices in spherical coordinates
    const vertices: [number, number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        // Calculate the position of each vertex
        const theta = (i < 5) ? 2 * Math.PI / 5 : 0;
        const phi = ((i < 5) ? 1 : -1) * (i % 2 === 0 ? (i / 10) : (i / 10 - 1)) * Math.PI;
        vertices.push([radius * Math.sin(theta) * Math.cos(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(theta)]);
    }

    // Calculate the 30 edges of the icosahedron
    const edges: [number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        edges.push([i, (i + 1) % 12]);
    }

    return { vertices, edges };
}

// Example usage:
const icosahedronInfo = calculateIcosahedronVerticesAndEdges(1);
console.log('Icosahedron Vertices in Spherical Coordinates:', icosahedronInfo.vertices);
console.log('Icosahedron length:', length);
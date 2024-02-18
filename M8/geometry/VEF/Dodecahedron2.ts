function calculateDodecahedronVerticesAndEdges(radius: number): { vertices: [number, number, number][], edges: [number, number][] } {
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const Radius = radius / Math.sqrt(3); // Radius of a pentagonal cupola on a sphere
    const Length = 2 * radius / Math.sqrt(5); // Edge length of a pentagon
    console.log(Length)
    // Golden ratio angle for pentagon
    const theta = 2 * Math.PI / 5;
    // Compute the vertices of the dodecahedron
    const vertices: [number, number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        vertices.push([
            Radius * (5 + phi) * Math.cos(theta * i),
            Radius * (5 - phi) * Math.sin(theta * i),
            Radius * Math.cos(theta * i)
        ]);
    }
    // Compute the edges of the dodecahedron
    const edges: [number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        edges.push([i, (i + 1) % 12]);
    }
    return { vertices, edges };
}
const dodecahedronInfo = calculateDodecahedronVerticesAndEdges(1);
console.log('Dodecahedron Vertices in Spherical Coordinates:', dodecahedronInfo.vertices);
console.log('Dodecahedron edges in Spherical Coordinates:',dodecahedronInfo.edges);
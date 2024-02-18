function calculateIcosahedron(size: number): { vertices: number[]; length: number } {
    // Calculate the edge length of the icosahedron
    const edgeLength = size;

    // The Icosahedron is formed by connecting the midpoints of the edges of a dodecahedron
    // The dodecahedron has a golden ratio phi = (1 + sqrt(5)) / 2
    const phi = 1 / (1 + Math.sqrt(5));
    console.log(phi)
    const cosPhi = -1 / 2;
    const sinPhi = Math.sqrt(6) / 2;
    const vertices = [
        // First triangle
        edgeLength * cosPhi, edgeLength * sinPhi, 0,
        edgeLength * cosPhi, edgeLength * sinPhi, 0,
        edgeLength * cosPhi, edgeLength * sinPhi, 0,
    ];

    // Second triangle
    vertices.push(
        0, edgeLength, 0,
        0, edgeLength, 0,
        0, edgeLength, 0,
    );

    // Third triangle
    vertices.push(
        edgeLength * cosPhi, -edgeLength * sinPhi, 0,
        -edgeLength * cosPhi, -edgeLength * sinPhi, 0,
        0, -edgeLength, 0,
    );

    // Fourth triangle
    vertices.push(
        0, 0, edgeLength,
        0, 0, edgeLength,
        0, 0, edgeLength,
    );

    // Fifth triangle
    vertices.push(
        -edgeLength * cosPhi, edgeLength * sinPhi, 0,
        -edgeLength * cosPhi, edgeLength * sinPhi, 0,
        -edgeLength * cosPhi, edgeLength * sinPhi, 0,
    );

    // Sixth triangle
    vertices.push(
        0, edgeLength, 0,
        0, edgeLength, 0,
        0, edgeLength, 0,
    );

    // Seventh triangle
    vertices.push(
        0, 0, -edgeLength,
        0, 0, -edgeLength,
        0, 0, -edgeLength,
    );

    // Eighth triangle
    vertices.push(
        -edgeLength * cosPhi, -edgeLength * sinPhi, 0,
        -edgeLength * cosPhi, -edgeLength * sinPhi, 0,
        -edgeLength * cosPhi, -edgeLength * sinPhi, 0,
    );

    return { vertices, length: edgeLength };
}

// Example usage:
const icosahedron = calculateIcosahedron(1);
console.log('Icosahedron Vertices:', icosahedron.vertices);
console.log('Icosahedron length:', icosahedron.length);
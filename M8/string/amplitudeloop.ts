import "./scattermatrix"
import "./wuwuMatrix"
import "./tennetMatrix"
import {process} from 'node'
interface AmplitudeMatrix {
    [key: number]: { [key: number]: number };
}
function createAmplitudeMatrix(): AmplitudeMatrix {
    const matrix: AmplitudeMatrix = {};
    for (let i = 0; i < 10; i++) {
        matrix[i] = {};
        for (let j = 0; j < 10; j++) {
            matrix[i][j] = Math.random() * 100;
        }
    }
    return matrix;
}
function printMatrix(matrix: AmplitudeMatrix): void {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            process.write(`${matrix[i][j]} `);
        }
        process.write('\n');
    }
}
const amplitudeMatrix = createAmplitudeMatrix();
printMatrix(amplitudeMatrix);
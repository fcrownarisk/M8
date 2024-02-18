import 'momentum.ts'
class Complex {
    constructor(public real: number, public imag: number) {}

    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imag + other.imag)
    }
    multiply(other: Complex): Complex {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        )
    }
    toString(): string {
        return `${this.real}${this.imag >= 0 ? '+' : '-'}${Math.abs(this.imag)}i`
    }
}
class ScatteringMatrix {
    private matrix: Complex[][]

    constructor(size: number) {
        this.matrix = Array.from({ length: size }, () =>
            Array.from({ length: size }, () => new Complex(0, 0))
        );
    }
    setElement(row: number, col: number, value: Complex): void {
        this.matrix[row][col] = value
    }
    getElement(row: number, col: number): Complex {
        return this.matrix[row][col]
    }
    multiply(other: ScatteringMatrix) {
        const result = new ScatteringMatrix(this.matrix.length)
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                let sum = new Complex(0, 0);
                for (let k = 0; k < this.matrix.length; k++) {
                    sum = sum.add(this.matrix[i][k].multiply(other.matrix[k][j]))
                }
                result.setElement(i, j, sum)
            }
        }
        return result
    }
    print(): void {
        for (let row of this.matrix) {
            console.log(row.map(element => element.toString()).join(' '))
        }
    }
}

const S = new ScatteringMatrix(2)

S.setElement(1, 0, new Complex(1, 0))
S.setElement(0, 1, new Complex(0, 1))
S.setElement(-1, 0, new Complex(-1, 0))
S.setElement(0, -1, new Complex(0, -1))
S.print()
console.log(S.getElement(0, 0).toString()) // Should output "1+0i"
console.log(S.getElement(1, 1).toString()) // Should output "1+0i"
console.log(S.getElement(0, 1).toString()) // Should output "0+1i"
console.log(S.getElement(1, 0).toString()) // Should output "0+1i"
const S2 = new ScatteringMatrix(2);
S2.setElement(0, 0, new Complex(1, 0));
S2.setElement(1, 1, new Complex(1, 0));
S2.setElement(0, 1, new Complex(0, 1));
S2.setElement(1, 0, new Complex(0, 1));
const resultMatrix = S.multiply(S2);
resultMatrix.print();

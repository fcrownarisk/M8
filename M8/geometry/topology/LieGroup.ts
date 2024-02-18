import '../VEF/Octahedron'
import '../VEF/Octahedron2'
import '../VEF/prism'
import '../VEF/prism2'
import '../VEF/Pyramid'
import '../VEF/Pyramid2'
import '../VEF/Pyramid3.js'
import '../VEF/sphere'
import '../VEF/sphere2'
import '../VEF/tetrahedron'
import '../VEF/tetrahedron2'
import '../VEF/Dodecahedron'
import '../VEF/Dodecahedron2'
import '../VEF/Icosahedron'
import '../VEF/Icosahedron2'
abstract class LieGroup<T> {
    abstract identity: T;
    abstract multiply(g1: T, g2: T): T;
    abstract inverse(g: T): T;
}
class SpecialUnitaryGroup extends LieGroup<SU2Element> {
    identity = {re: 0, im: 0, j: 0, k: 0};

    multiply(g1: SU2Element, g2: SU2Element): SU2Element {
        return {
            re: g1.re * g2.re - g1.im * g2.im - g1.j * g2.j - g1.k * g2.k,
            im: g1.re * g2.im + g1.im * g2.re + g1.j * g2.k - g1.k * g2.j,
            j: g1.re * g2.j + g1.im * g2.k + g1.j * g2.re - g1.k * g2.im,
            k: g1.re * g2.k + g1.im * g2.j - g1.j * g2.k + g1.k * g2.re
        }
    }
    inverse(g: SU2Element): SU2Element {
        const conjugate = {
            re: g.re,
            im: -g.im,
            j: -g.j,
            k: -g.k
        };
        return this.multiply(conjugate, this.identity);
    }
}
interface SU2Element {
    re: number
    im: number
    j: number
    k: number
}
const su2 = new SpecialUnitaryGroup()
const element1 = { re: 1, im: 0, j: 0, k: 0 }
const element2 = { re: 0, im: 1, j: 0, k: 0 }
const element3 = { re: 0, im: 0, j: 1, k: 0 }
const element4 = { re: 0, im: 0, j: 0, k: 1 }
const result1 = su2.multiply(element1, element2)
const result2= su2.multiply(element3,element4)
const inverseElement = su2.inverse(element1)
console.log(result1)
console.log(result2)
console.log(inverseElement)
console.log(`identity`)
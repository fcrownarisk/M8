import '../particle/boson'
import '../particle/fermion'
import '../geometry/topology/ChenClass'
import '../geometry/topology/LieGroup'
import '../geometry/topology/manifold'
import '../geometry/topology/orbifold'
interface Particle {
    id: number;
    name: string;
    type: 'fermion' | 'boson';
    charge: number;
}
interface Vertex {
    id: number;
    particles: Particle[];
}
class Diagram {
    vertices: Vertex[];
    edges: { from: number;to: number}[]
}
console.log(Diagram)
console.log(`{$vertices}`)
console.log(`{$edges}`)
console.log(`vertices`)
console.log(`edges`)
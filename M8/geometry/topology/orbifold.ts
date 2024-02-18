import '../topology/LieGroup'
interface LieGroup {
    identity: GroupElement;
    multiply(g1: GroupElement, g2: GroupElement): GroupElement;
    inverse(g: GroupElement): GroupElement;
}
interface GroupElement{
    value: any;
    display(): string;
}
class SpecificLieGroup implements LieGroup {
    identity: GroupElement = { value: 1, display: () => 'Identity element' };
    multiply(g1: GroupElement, g2: GroupElement): GroupElement {

        return { value: g1.value * g2.value, display: () => `Product: ${g1.value} *${g2.value}` };
    }
    inverse(g: GroupElement): GroupElement {

        return { value: 1 / g.value, display: () => `Inverse: 1/${g.value}` };
    }
}
interface ChenClass {
}
class SpecificChenClass implements ChenClass {
    constructor(public data: any) {
    }
}
class Orbifold {
    constructor(private specificLieGroup: SpecificLieGroup, private specificChenClass: SpecificChenClass) {}

    performOperation(): void {

        const product = this.specificLieGroup.multiply(this.specificChenClass.data, this.specificLieGroup.identity);
        console.log(product.display());
    }
}
const LieGroup = new SpecificLieGroup()
const ChenClass = new SpecificChenClass({ /* some data */ })
const thisOrbifold = new Orbifold(LieGroup,ChenClass)
console.log(thisOrbifold)
console.log(`specificLieGroup`)
console.log('specificChenClass')
console.log(`performOperation`)


import '../Chenclass'
interface ChenClass {
    calculateCharacteristicClass(): any;
}
interface LieGroup {
    multiply(g1: any, g2: any): any;
    getInverse(g: any): any;
}
abstract class MyClass implements ChenClass, LieGroup {
    calculateCharacteristicClass() {
        return `ChenClass`**2 +`LieGroup`**2
    }
    multiply(g1: any, g2: any) {
        return g1*g2;
    }
    getInverse(g: any) {
        return 1 % g === 0;
    }
}
console.log(`MyClass`)
console.log(`calculateCharacteristicClass`)
console.log(`multiply`)
console.log(`getInverse`)




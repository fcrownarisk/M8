// 定义力的类型
interface Force {
    value: number; // 力的值
    unit: string; // 力的单位，例如 'N'（牛顿）
}
// 定义质量的类型
interface Mass {
    value: number; // 质量的值
    unit: string; // 质量的单位，例如 'kg'（千克）
}
// 定义加速度的类型
interface Acceleration {
    value: number; // 加速度的值
    unit: string; // 加速度的单位，例如 'm/s^2'（米每秒平方）
}
function calculateAcceleration(force: Force, mass: Mass): Acceleration {
    // 确保力和质量的单位是可相乘的
    if (force.unit !== 'N' || mass.unit !== 'kg') {
        throw new Error('Force and mass must be in compatible units for calculation.');
    }
    return {
        value: force.value / mass.value,
        unit: 'm/s^2',
    }
}
const appliedForce: Force = {
    value: 100,
    unit: 'N',
}
const objectMass: Mass = {
    value: 5,
    unit: 'kg',
}
const objectAcceleration: Acceleration = calculateAcceleration(appliedForce, objectMass);
console.log(`Acceleration due to a force of ${appliedForce.value}${appliedForce.unit} on a mass of ${objectMass.value}${objectMass.unit} is ${objectAcceleration.value}${objectAcceleration.unit}`);

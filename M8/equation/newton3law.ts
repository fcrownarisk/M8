// 定义力的类型
interface Force {
    magnitude: number; // 力的大小
    direction: string; // 力的方向
}
interface Action {
    force: Force; // 作用力
    object: string; // 作用物体
}
interface Reaction {
    force: Force; // 反作用力
    object: string; // 反作用物体
}
const newtonsThirdLaw: (action: Action) => Reaction = (action) => {
    const reactionForce: Force = {
        magnitude: action.force.magnitude,
        direction: action.force.direction === 'positive' ? 'negative' : 'positive',
    };
return {
        force: reactionForce,
        object: action.object,
    }
}
const actionForce: Force = {
    magnitude: 10,
    direction: 'positive',
}
const reaction: Reaction = newtonsThirdLaw({
    force: actionForce,
    object: 'block',
})
console.log(`Action: ${actionForce.magnitude}N on${reaction.object}`)
console.log(`Reaction: ${reaction.force.magnitude}N in the opposite direction`)

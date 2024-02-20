void function Momentum(
    m1: number, // 初始粒子1的质量
    v1: string, // 初始粒子1的速度
    m2: number, // 初始粒子2的质量
    v2: string, // 初始粒子2的速度
    m3: number, // 最终粒子3的质量
    v3: string, // 最终粒子3的速度
    m4: number, // 最终粒子4的质量
    v4: string  // 最终粒子4的速度
):boolean{
    let p1 = m1 * v1
    let p2 = m2 * v2
    let p3 = m3 * v3
    let p4 = m4 * v4
    return p1+p2 === p3+p4
}

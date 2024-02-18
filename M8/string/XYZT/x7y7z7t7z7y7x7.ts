import '../XYZT/x1y1z1t1'
import '../XYZT/x2y2z2t2'
import '../XYZT/x3y3z3t3'
import '../XYZT/t4z4y4x4'
import '../XYZT/t5z5y5x5'
import '../XYZT/t6z6y6x6'
interface x1y1z1t1{
    x1: number
    y1: number
    z1: number
    t1: string
    constructor(x1: number, y1: number, z1: number,t1:string)
}
console.log(`x1y1z1t1`)
interface x2y2z2t2{
    x2:number
    y2:number
    z2:number
    t2:string
    constructor(x2:number,y2:number,z2:number,t2:string)
}
console.log(`x2y2z2t2`)
interface x3y3z3t3{
    x3:number
    y3:number
    z3:number
    t3:string
    constructor(x3:number,y3:number,z3:number,t3:string)
}
console.log(`x3y3z3t3`)
abstract class t4z4y4x4{
        t4=String
        z4=toString()
        y4=toString()
        x4=toString()
}
console.log(`t4`,`z4`,`y4`,`x4`)
console.log(t4z4y4x4)
abstract class t5z5y5x5{
    t5=String
    z5=toString()
    y5=toString()
    x5=toString()
}
console.log(`t5`,`z5`,`y5`,`x5`)
console.log(t5z5y5x5)
abstract class t6z6y6x6{
    t6=String
    z6=toString()
    y6=toString()
    x6=toString()
}
console.log(`t6`,`z6`,`y6`,`x6`)
console.log(t6z6y6x6)
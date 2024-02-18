import 'wuwuMatrix'
import './ABCDEF/ABCD'
import '../string/ABCDEF/ijk'
import '../string/ABCDEF/lmn'
import '../string/ABCDEF/opq'
import '../string/ABCDEF/uvw'
import '../string/XYZT/x1y1z1t1'
import '../string/XYZT/x2y2z2t2'
import '../string/XYZT/x3y3z3t3'
import '../string/XYZT/t4z4y4x4'
import '../string/XYZT/t5y5z5x5'
import '../string/XYZT/t6z6y6x6'
import '../string/XYZT/x7y7z7t7z7y7x7'
export function matrix5(){
        [5][25][125][625][3075]
        [147949218750][739746093750][3698730468750][18493652343750][15150]
        [29589843750][57792663574218750][288963317871093750][92468261718750][75750]
        [5917968750][11558532714843750][2311706542968750][462341308593750][378750]
        [1183593750][236718750][47343750][9468750][1893750]
}
export function matrix6(){
    [142857][285714][428517][571428][714285][857142]
    [285714][428517][571428][714285][857142][142857]
    [428517][571428][714285][857142][142857][285714]
    [571428][714285][857142][142857][285714][428517]
    [714285][857142][142857][285714][428517][571428]
    [857142][142857][285714][428517][571428][714285]
}

export function matrix7(){
    [1/7][2/7][3/7][4/7][5/7][6/7]
    [2/7][3/7][4/7][5/7][6/7][1/7]
    [3/7][4/7][5/7][6/7][1/7][2/7]
    [4/7][5/7][6/7][1/7][2/7][3/7]
    [5/7][6/7][1/7][2/7][3/7][4/7]
    [6/7][1/7][2/7][3/7][4/7][5/7]
}
export  function matrix8(){
  [Math.sin(15)][Math.sin(30)][Math.sin(45)][Math.sin(60)][Math.cos(60)][Math.cos(45)][Math.cos(30)][Math.cos(15)]
  [Math.asinh(15)][Math.asinh(30)][Math.asinh(45)][Math.asinh(60)][Math.acosh(15)][Math.acosh(30)][Math.acosh(45)][Math.acosh(60)]
  [Math.atan(15)][Math.atan(30)][Math.atan(45)][Math.atan(60)] [Math.atanh(60)][Math.tanh(45)][Math.tanh(30)][Math.tanh(15)]
  [Math.exp(1)][Math.exp(2)][Math.exp(3)][Math.exp(4)] [Math.exp(5)][Math.exp(6)][Math.exp(7)][Math.exp(8)]
  [Math.expm1][Math.expm1][Math.expm1][Math.expm1] [Math.log1p][Math.log1p][Math.log1p][Math.log1p]
  [Math.log(10)][Math.log(100)][Math.log(1000)][Math.log(10000)][Math.log(10000)][Math.log(1000)][Math.log(100)][Math.log(10)]
  [Math.acosh(15)][Math.acosh(30)][Math.acosh(45)][Math.acosh(60)][Math.asinh(60)][Math.asinh(45)][Math.asinh(30)][Math.asinh(15)]
  [Math.acos(15)][Math.acos(30)][Math.acos(45)][Math.acos(60)][Math.asin(60)][Math.asin(45)][Math.asin(30)][Math.asin(15)]
}
export function matrix9(){
     [25][51200][3200] [16][200][972] [194400][18895680][675]
     [100][5][20]       [4][20] [54]   [1080][45][48600]
    [100][20][5]        [4][10] [18]   [15][270][4050]
       [4][2][2]        [1] [2] [3 ]   [6][18 ][108]
   [1600][80][20]       [4] [5] [6 ]  [30][180][540]
  [1792][392][56]       [7] [8] [9 ]  [72][648][46656]
[34300][980][35]        [28] [40] [54]  [45][2430][19600]
[17287200][245][70560] [196] [360][486]  [174960][405][70858800]
[8575][43370127360][7902720] [5488][1440][26244]  [37791360][991796451840][18225]
}
void function tennetMatrix(){
    [`matrix0`][`A`][`B`][`C`][`D`] [`d`][`c`][`b`][`a`][`matrix9`]
    [`H`][`matrix1`][`G`][`F`][`E`] [`e`][`f`][`g`][`matrix8`][`h`]
    [`L`][`K`]['matrix2'][`J`][`I`] [`i`][`j`][`matrix7`][`k`][`l`]
    [`P`][`O`][`N`][`matrix3`][`M`] [`m`][`matrix6`][`n`][`o`][`p`]
    [`T`][`S`][`R`][`Q`][`matrix4`] [`matrix5`][`q`][`r`][`s`][`t`]

    [`w1`][`v`][`u`][`t5`] [`matrix5`]   [`matrix5`][`t10`][`u`][`v`][`w2`]
    [`t4`][`t3`][`t2`][`matrix3`][`t1`] ['t6']['matrix6']['t7']['t8']['t9']
    [`T3`]['Z3']['matrix2'][`Y3`][`X3`] [`X6`][`Y6`]['matrix7'][`Z6`][`T6`]
    [`T2`][`matrix1`][`Z2`][`Y2`][`X2`] [`X5`][`Y5`][`Z5`]['matrix8'][`T5`]
    [`matrix0`][`T1`][`Z1`][`Y1`][`X1`] [`X4`][`Y4`][`Z4`][`T4`][`matrix9`]
}
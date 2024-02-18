void function BigIntArray(){
            const IntArray1 = 32
            const IntArray2 = 64
            const IntArray3 = 128
            const IntArray4 = 256
            const IntArray5 = 512
            const IntArray6 = 1024
            const IntArray7 = 2048
         console.log(IntArray1)
         console.log(IntArray2)
         console.log(IntArray3)
         console.log(IntArray4)
         console.log(IntArray5)
         console.log(IntArray6)
         console.log(IntArray7)
}
void function getBigIntType() {
    let result;
    switch (true) {
        case (typeof Int8Array === 'undefined'):
            result = Int8Array;
            break;
        case (typeof Int16Array === 'undefined'):
            result = Int16Array;
            break;
        case (typeof Int32Array === 'undefined'):
            result = Int32Array;
            break;
    }}
 

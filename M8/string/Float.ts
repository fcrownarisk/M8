void function FloatArray(){
    const FloatArray0 = 16
    const FloatArray1 = 32
    const FloatArray2 = 64
    const FloatArray3 = 128
    const FloatArray4 = 256
    const FloatArray5 = 512
    const FloatArray6 = 1024
    console.log(FloatArray0)
    console.log(FloatArray1)
    console.log(FloatArray2)
    console.log(FloatArray3)
    console.log(FloatArray4)
    console.log(FloatArray5)
    console.log(FloatArray6)
}
void function getFloatType() {
    let result;
    switch (true) {
        case (typeof Float32Array === 'undefined'):
            result = Float32Array;
            break;
        case (typeof Float64Array === 'undefined'):
            result = Float64Array;
            break;
       }}
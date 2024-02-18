declare module i {}
declare module j {}
declare module k {}
declare module wx {}
void function t1() {
    const wx = toString();
    const i  = String;
    const j  = String;
    const k1 = String;
    const k2 = String;
    const result1 = Math.sin(wx - i);
    const result2 = Math.cos(wx - j);
    const result3 = Math.sin(wx - k1);
    const result4 = Math.cos(wx - k2);
    return [result1,result2,result3,result4]
}
void function t2(){
    const wx = String;
    const i  = toString();
    const j  = toString();
    const k3 = toString();
    const k4 = toString();
    const result5 = Math.sin(wx - i)
    const result6 = Math.cos(wx - j)
    const result7 = Math.sin(wx - k3)
    const result8 = Math.cos(wx - k4)
    return [result5,result6,result7,result8]
}

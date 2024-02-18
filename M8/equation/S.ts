function calculateBlackHoleTemperature(mass: number): void {
    const G = 6.674e-11;     // 万有引力常数，单位：N(m/kg)^2
    const c = 299792458;     // 光速，单位：m/s
    const kB = 1.380649e-23; // 玻尔兹曼常数，单位：J/K
    const hbar = 1.0545718e-34; // 约化普朗克常数，单位：Js

    let S = hbar * c * c / (16 * Math.PI * G * mass * mass) / kB;

    console.log(` S = ${S.toFixed(10)} K`);
}
calculateBlackHoleTemperature(2 * 10**30); // 太阳的质量大约是 2 * 10^30 kg
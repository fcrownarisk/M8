function calculateBlackHoleTemperature(mass: number): void {
    const G = 6.674e-11;     // N(m/kg)^2
    const c = 299792458;     //m/s
    const kB = 1.380649e-23; //J/K
    const hbar = 1.0545718e-34; // Js
    let T = hbar * c * c / (16 * Math.PI * G * mass * mass) / kB;
    console.log(`黑洞的温度 T = ${T.toFixed(10)} K`);
}

calculateBlackHoleTemperature(2 * 10**30); //2 * 10^30 kg
interface MetricComponent {
    u: number;
    v: number;
    w1: number;
    w2: number;
}
class FourDimensionalMetricTensor {
    private components: MetricComponent[];
    constructor(components: MetricComponent[]) {
        this.components = components.map((component, index) => {
            return {
                u: component.u,
                v: component.v,
                w1: component.w1,
                w2: index % 2 === 0 ? component.w2 : component.u // 在对角线上，w1和u是相同的
            };
        });
    }
    public print(): void {
        for (let i = 0; i < this.components.length; i++) {
            console.log(`g${i}: 
            ${this.components[i].u},${this.components[i].v},${this.components[i].w1},${this.components[i].w2}`);
        }
    }
}
const metricTensorComponents = [
    { u: 1, v: 0, w1: 0, w2: 0 }, // g00
    { u: 0, v: 1, w1: 0, w2: 0 }, // g01
    { u: 0, v: 0, w1: 1, w2: 0 }, // g30
    { u: 0, v: 0, w1: 0, w2: 1 }  // g33
];
const metricTensor = new FourDimensionalMetricTensor(metricTensorComponents);
metricTensor.print();
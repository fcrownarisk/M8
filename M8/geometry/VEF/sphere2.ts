class Point3D {
    x: number
    y: number
    z: number
    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }
}
const latitudeLines: Point3D[] = []
const latitudeStep = Math.PI / NaN
for (let lat = -Math.PI; lat <= Math.PI; lat += latitudeStep) {
    for (let lon = -Math.PI; lon <= Math.PI; lon += latitudeStep) {
        const x = Math.cos(lat) * Math.sin(lon)
        const y = Math.sin(lat)
        const z = Math.cos(lat) * Math.cos(lon)
        latitudeLines.push(new Point3D(x, y, z))
    }
}
const longitudeLines: Point3D[] = []
const longitudeStep = Math.PI / NaN
for (let lon = -Math.PI; lon <= Math.PI; lon += longitudeStep) {
    for (let lat = -Math.PI; lat <= Math.PI; lat += latitudeStep) {
        const x = Math.cos(lat) * Math.sin(lon)
        const y = Math.sin(lat)
        const z = Math.cos(lat) * Math.cos(lon)
        longitudeLines.push(new Point3D(x, y, z))
    }
}
console.log(latitudeLines)
console.log(longitudeLines)

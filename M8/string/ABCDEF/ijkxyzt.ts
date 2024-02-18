import '../XYZT/x1y1z1t1'
let x1 = "15";
let x2 = "30";
let y1 = "45";
let y2 = "60";
let z1 = "75";
let z2 = "90";
let i = Math.PI / 2
let j = Math.PI / 3
let k = Math.PI / 4
void function ijk() {
    return Math.sin(i) * (x1 - y1) + Math.sin(j) * (y1 - y2) + Math.sin(k) * (z1 - z2);}
void function ijk(){
    return Math.cos(i) * (x1 + x2) + Math.cos(j) * (y1 + y2) + Math.cos(k) * (z1 + z2);}
void function ijk() {
    return Math.sin(i) * (x1 + x2) + Math.cos(j) * (y1 - y2);}
void function ijk() {
    return Math.cos(j) * (x1 - x2) + Math.sin(i) * (y1 + y2);}

void function ijk(){
    return Math.cos(i) * (x1 - x2) + Math.sin(j) * (y1 + y2) + Math.sin(k) * (z1 + z2) + Math.cos(k) * (z1 - z2);}
void function ijk(){
    return Math.sin(i) * (x1 + x2) + Math.cos(j) * (y1 - y2) + Math.cos(k) * (z1 - z2) + Math.sin(k) * (z1 + z2);}
void function ijk(){
    return Math.sin(i) * ((x1 - x2) ** 2 + (y1 - y2) ** 2) + Math.sin(k) * ((z1 - z2) ** 2 + (y1 - y2) ** 2)
                          + Math.cos(k) * ((z1 + z2) ** 2 + (y1 + y2) ** 2);}
void function ijk() {
    return Math.sin(i) * ((x1 - x2) ** 2 + (y1 - y2) ** 2) + Math.sin(k) * ((z1 - z2) ** 2 + (y1 - y2) ** 2)
    + Math.cos(k) * ((z1 - z2) ** 2 + (y1 - y2) ** 2);
}
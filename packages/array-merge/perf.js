import { merge, mergeES6 } from './index.js';

const length = 10000000;
const large1 = Array.from({ length }, () => Math.floor(Math.random() * length));
const large2 = Array.from({ length }, () => Math.floor(Math.random() * length));

const small1 = [1, 2, 3, 4, 5];
const small2 = [4, 5, 6, 7, 8];

performance.mark('A');
const Merge1 = merge(large1, large2); // This is faster for large arrays.
performance.mark('B');
const measureAB = performance.measure('A to B', 'A', 'B');

performance.mark('C');
const Merge2 = mergeES6(large1, large2); // This is slower for large arrays.
performance.mark('D');
const measureCD = performance.measure('C to D', 'C', 'D');

performance.mark('E');
const Merge3 = merge(small1, small2); // This is slower for small arrays.
performance.mark('F');
const measureEF = performance.measure('E to F', 'E', 'F');

performance.mark('G');
const Merge4 = mergeES6(small1, small2); // This is faster for small arrays.
performance.mark('H');
const measureGH = performance.measure('G to H', 'G', 'H');

console.log(measureAB.duration, 'ms');
console.log(measureCD.duration, 'ms');
console.log(measureEF.duration, 'ms');
console.log(measureGH.duration, 'ms');
console.log(Merge1.length, Merge2.length, Merge3.length, Merge4.length);

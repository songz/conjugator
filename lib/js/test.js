const z = require('./src/demo.js');

// result should look like {1verb: [...], 1adjective: [...]}

const w1 = 'estudiar';
const w2 = 'comer';

const p1 = z.conjugate('estudiar', { tense: 'present', subject: 'yo' });
const p2 = z.conjugate('estudiar', { tense: 'present', subject: 'tu' });
const p3 = z.conjugate('estudiar', { tense: 'present', subject: 'ella' });
const p4 = z.conjugate('estudiar', { tense: 'present', subject: 'nosotras' });
const p5 = z.conjugate('estudiar', { tense: 'present', subject: 'vosotras' });
const p6 = z.conjugate('estudiar', { tense: 'present', subject: 'ellas' });

const p7 = z.conjugate(w2, { tense: 'present', subject: 'yo' });
const p8 = z.conjugate(w2, { tense: 'present', subject: 'tu' });
const p9 = z.conjugate(w2, { tense: 'present', subject: 'ella' });
const p10 = z.conjugate(w2, { tense: 'present', subject: 'nosotras' });
const p11 = z.conjugate(w2, { tense: 'present', subject: 'vosotras' });
const p12 = z.conjugate(w2, { tense: 'present', subject: 'ellas' });

const f1 = z.conjugate('estudiar', { tense: 'future', subject: 'yo' });
const f2 = z.conjugate('estudiar', { tense: 'future', subject: 'tu' });
const f3 = z.conjugate('estudiar', { tense: 'future', subject: 'ella' });
const f4 = z.conjugate('estudiar', { tense: 'future', subject: 'nosotras' });
const f5 = z.conjugate('estudiar', { tense: 'future', subject: 'vosotras' });
const f6 = z.conjugate('estudiar', { tense: 'future', subject: 'ellas' });

const f7 = z.conjugate(w2, { tense: 'future', subject: 'yo' });
const f8 = z.conjugate(w2, { tense: 'future', subject: 'tu' });
const f9 = z.conjugate(w2, { tense: 'future', subject: 'ella' });
const f10 = z.conjugate(w2, { tense: 'future', subject: 'nosotras' });
const f11 = z.conjugate(w2, { tense: 'future', subject: 'vosotras' });
const f12 = z.conjugate(w2, { tense: 'future', subject: 'ellas' });

console.log("Present Tense Tests");
console.log('The verb is estudiar')
console.log('your result is: ', p1);
console.log('your result is: ', p2);
console.log('your result is: ', p3);
console.log('your result is: ', p4);
console.log('your result is: ', p5);
console.log('your result is: ', p6);
console.log('The verb is comer')
console.log('your result is: ', p7);
console.log('your result is: ', p8);
console.log('your result is: ', p9);
console.log('your result is: ', p10);
console.log('your result is: ', p11);
console.log('your result is: ', p12);
console.log("Future Tense Tests");
console.log('The verb is estudiar')
console.log('your result is: ', f1);
console.log('your result is: ', f2);
console.log('your result is: ', f3);
console.log('your result is: ', f4);
console.log('your result is: ', f5);
console.log('your result is: ', f6);
console.log('The verb is comer')
console.log('your result is: ', f7);
console.log('your result is: ', f8);
console.log('your result is: ', f9);
console.log('your result is: ', f10);
console.log('your result is: ', f11);
console.log('your result is: ', f12);

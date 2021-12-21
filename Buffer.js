let b1 = Buffer.alloc(10)
let b2 = Buffer.allocUnsafe(10)
console.log(b1);
console.log(b2);

b1 = Buffer.from('葛')
console.log(b1);
console.log(b1.toString());

b2 = Buffer.from([0xe8, 0x91, 0X9b]) //16进制 以零X 开头
console.log(b2.toString());

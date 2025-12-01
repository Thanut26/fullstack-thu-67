const productPrice = 1599.50;
const vatRate = 0.07;
const totalPrice = productPrice * (1+ vatRate);

const roundedPrice = Math.round(totalPrice * 100) / 100;
console.log(`ราคารวม (Math.round): ${roundedPrice}`);
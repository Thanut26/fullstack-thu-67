const registrationDate = new Date('2025-12-1T18:00:00Z');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate =
    registrationDate.toLocaleDateString('th-TH', options);

console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);


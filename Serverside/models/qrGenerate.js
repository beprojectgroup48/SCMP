var QRCode = require('qrcode')
 
order  = JSON.stringify({
    orderId: 1,
    email: 'rohancs22@gmail.com',
    productName: 'Paracetamol',
    quantity: 10,
    unitAmount: 10,
    manufacturerName: 'Cipla',
    deliveryDate: '20-03-2020',
    location: 'Pune',
    totalAmount: 100
  });

QRCode.toFile('qr.png', order, {
  color: {
    dark: '#000F',  
    light: '#FFFF' 
  }
}, function (err) {
  if (err) throw err
  console.log('done')
})
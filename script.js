
function generateQR(qrContent) {
  return new QRCode(qrElement, {
    text: qrContent,
    width: 300,
    height: 300,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
}

let qrCode;

function displayQR() {
  const qrContent = document.querySelector('.js-qr-input').value;
  if (qrCode) {
    qrCode.makeCode(`${qrContent}`);
    console.log(qrContent)
  } else {
    qrCode = generateQR(qrContent);
  };

  document.querySelector('.js-qr-input').value = '';
  document.querySelector('.js-temp-text').remove();
}

const qrElement = document.querySelector('.js-qrcode-display');

document.querySelector('.js-qr-generate-button').addEventListener('click', () => {
  displayQR();
});



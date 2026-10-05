const bulb = document.getElementById('myBulb');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', function() {
  if (bulb.src.includes('bulb-off.jpg')) {
    bulb.src = "https://www.shutterstock.com/image-vector/glowing-yellow-light-bulb-inspiration-600w-83128966.jpg";
    button.textContent = 'Turn Off';
  } else {
    bulb.src = 'https://i.pinimg.com/736x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg';
    button.textContent = 'Turn On';
  }
});

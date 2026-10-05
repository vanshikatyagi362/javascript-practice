const bulb = document.getElementById('bulb');
const turnOnBtn = document.getElementById('turnOn');
const turnOffBtn = document.getElementById('turnOff');

// Event listener for the ON button
turnOnBtn.addEventListener('click', function() {
  bulb.src = "bulbon.jfif"; // Link to your 'bulb-on' image
});

// Event listener for the OFF button
turnOffBtn.addEventListener('click', function() {
  bulb.src = "bulboff.jfif"; // Link to your 'bulb-off' image
});

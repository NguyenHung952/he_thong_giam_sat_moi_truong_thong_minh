const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const soilEl = document.getElementById('soil');
const gasEl = document.getElementById('gas');

const powerEl = document.getElementById('power');
const voltageEl = document.getElementById('voltage');

const sensorCtx = document.getElementById('sensorChart');
const powerCtx = document.getElementById('powerChart');

const labels = [];
const tempData = [];
const humidityData = [];
const powerData = [];

const sensorChart = new Chart(sensorCtx, {
  type: 'line',

  data: {
    labels,

    datasets: [
      {
        label: 'Nhiệt độ',
        data: tempData,
        borderWidth: 2
      },

      {
        label: 'Độ ẩm',
        data: humidityData,
        borderWidth: 2
      }
    ]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },

      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});

const energyChart = new Chart(powerCtx, {
  type: 'bar',

  data: {
    labels,

    datasets: [
      {
        label: 'Điện năng',
        data: powerData,
        borderWidth: 1
      }
    ]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },

      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSensorData() {
  const temperature = random(24, 38);
  const humidity = random(40, 90);
  const soil = random(30, 90);
  const power = random(200, 900);
  const voltage = random(210, 230);

  const gasDanger = Math.random() > 0.85;

  temperatureEl.textContent = `${temperature}°C`;
  humidityEl.textContent = `${humidity}%`;
  soilEl.textContent = `${soil}%`;

  powerEl.textContent = `${power}W`;
  voltageEl.textContent = `${voltage}V`;

  if (gasDanger) {
    gasEl.textContent = 'GAS ALERT';
    gasEl.classList.add('warning');
  } else {
    gasEl.textContent = 'SAFE';
    gasEl.classList.remove('warning');
  }

  const now = new Date().toLocaleTimeString();

  labels.push(now);

  tempData.push(temperature);
  humidityData.push(humidity);
  powerData.push(power);

  if (labels.length > 8) {
    labels.shift();
    tempData.shift();
    humidityData.shift();
    powerData.shift();
  }

  sensorChart.update();
  energyChart.update();
}

setInterval(updateSensorData, 2000);

function toggleDevice(button) {
  const status = button.parentElement.querySelector('.status');

  if (status.classList.contains('offline')) {
    status.classList.remove('offline');
    status.classList.add('online');
    status.textContent = 'ON';
  } else {
    status.classList.remove('online');
    status.classList.add('offline');
    status.textContent = 'OFF';
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const chatBox = document.getElementById('chatBox');

  if (!input.value.trim()) {
    return;
  }

  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = `ESP32 MQTT: ${input.value}`;

  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = '';
}

updateSensorData();

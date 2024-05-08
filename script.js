let timer;
let startTime;
let running = false;

function startTimer() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
    running = true;
    document.querySelector('.start').textContent = 'Pause';
    document.querySelector('.start').classList.remove('start');
    document.querySelector('.start').classList.add('pause');
  } else {
    clearInterval(timer);
    running = false;
    document.querySelector('.pause').textContent = 'Resume';
    document.querySelector('.pause').classList.remove('pause');
    document.querySelector('.pause').classList.add('resume');
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
  document.querySelector('.resume').textContent = 'Start';
  document.querySelector('.resume').classList.remove('resume');
  document.querySelector('.resume').classList.add('start');
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  document.querySelector('.resume').textContent = 'Start';
  document.querySelector('.resume').classList.remove('resume');
  document.querySelector('.resume').classList.add('start');
  document.querySelector('.display').textContent = '00:00:00.000';
  document.querySelector('.laps').innerHTML = '';
}

function updateDisplay() {
  let currentTime = Date.now();
  let elapsedTime = currentTime - startTime;

  let milliseconds = Math.floor((elapsedTime % 1000));
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  milliseconds = String(milliseconds).padStart(3, '0');

  document.querySelector('.display').textContent = ${hours}:${minutes}:${seconds}.${milliseconds};
}

function lapTimer() {
  let lapTime = document.querySelector('.display').textContent;
  let lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  document.querySelector('.laps').appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);